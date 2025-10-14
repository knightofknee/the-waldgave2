import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { onAuthStateChanged, deleteUser, reauthenticateWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function DeleteAccountPage() {
  const router = useRouter();
  const [uid, setUid] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [confirmText, setConfirmText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUid(user?.uid ?? null);
      setCheckingAuth(false);
    });
    return () => unsub();
  }, []);

  const canDelete = useMemo(
    () => confirmText.trim().toUpperCase() === "DELETE" && !!uid && !busy,
    [confirmText, uid, busy]
  );

  async function deleteFirestoreData(userUid: string) {
    // 1) Delete profile
    const profileRef = doc(db, "Profiles", userUid);
    // 2) Delete friend list doc
    const friendsRef = doc(db, "Friends", userUid);
    // 3) Delete all posts authored by the user
    const postsQ = query(collection(db, "Posts"), where("author", "==", userUid));
    const postsSnap = await getDocs(postsQ);

    // Batch delete docs we control directly
    const batch = writeBatch(db);
    batch.delete(profileRef);
    batch.delete(friendsRef);
    postsSnap.forEach((d) => batch.delete(doc(db, "Posts", d.id)));
    await batch.commit();

    // NOTE: If other users have this user in their Friends arrays as objects,
    // that reference cannot be queried with array-contains on a property.
    // If your “Settings > Delete account” flow also removes you from others’ lists
    // via a Cloud Function, that will still run the same way. If not, consider
    // adding a CF to clean up reverse edges.
  }

  async function handleDelete() {
    if (!uid || !auth.currentUser) return;
    setBusy(true);
    setError(null);

    try {
      // Delete Firestore data first (idempotent)
      await deleteFirestoreData(uid);

      // Delete the Auth user last
      await deleteUser(auth.currentUser);

      setDone(true);
      // Optionally sign-out redirect after a short pause
      setTimeout(() => router.replace("/"), 800);
    } catch (e: any) {
      // If we hit requires-recent-login, prompt reauth (Google popup by default).
      if (e?.code === "auth/requires-recent-login") {
        try {
          const provider = new GoogleAuthProvider();
          await reauthenticateWithPopup(auth.currentUser!, provider);
          // Retry after successful reauth
          await deleteFirestoreData(uid);
          await deleteUser(auth.currentUser!);
          setDone(true);
          setTimeout(() => router.replace("/"), 800);
        } catch (reauthErr: any) {
          setError(reauthErr?.message || "Reauthentication failed.");
        }
      } else {
        setError(e?.message || "Deletion failed.");
      }
    } finally {
      setBusy(false);
    }
  }

  if (checkingAuth) {
    return (
      <div style={{ padding: 24 }}>
        <p>Checking sign-in…</p>
      </div>
    );
  }

  if (!uid) {
    return (
      <div style={{ padding: 24 }}>
        <Head>
          <title>Delete Account — Waldgrave</title>
          <meta name="robots" content="noindex" />
        </Head>
        <h1>Delete Account</h1>
        <p>You’re not signed in.</p>
        <p>
          Please <a href="/Login">log in</a> to delete your account.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 560, margin: "40px auto", padding: "0 16px" }}>
      <Head>
        <title>Delete Account — Waldgrave</title>
        <meta name="robots" content="noindex" />
      </Head>

      <h1 style={{ marginBottom: 8 }}>Delete Account</h1>
      <p style={{ color: "#b00020", fontWeight: 600 }}>
        This is permanent and cannot be undone.
      </p>
      <ol>
        <li>All of your posts will be deleted.</li>
        <li>Your profile and friends list will be deleted.</li>
        <li>Your sign-in (Firebase Auth account) will be deleted.</li>
      </ol>

      <div style={{ marginTop: 24 }}>
        <label htmlFor="confirm" style={{ display: "block", marginBottom: 8 }}>
          Type <code>DELETE</code> to confirm:
        </label>
        <input
          id="confirm"
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder="DELETE"
          style={{
            width: "100%",
            padding: 10,
            border: "1px solid #ccc",
            borderRadius: 8,
            fontSize: 16,
          }}
          disabled={busy || done}
        />
      </div>

      {error && (
        <p style={{ color: "#b00020", marginTop: 12 }}>
          {error}
        </p>
      )}
      {done && (
        <p style={{ color: "green", marginTop: 12 }}>
          Account deleted. Redirecting…
        </p>
      )}

      <button
        onClick={handleDelete}
        disabled={!canDelete}
        style={{
          marginTop: 16,
          padding: "12px 16px",
          borderRadius: 10,
          border: "1px solid #222",
          background: canDelete ? "#222" : "#999",
          color: "#fff",
          cursor: canDelete ? "pointer" : "not-allowed",
          fontWeight: 600,
        }}
      >
        {busy ? "Deleting…" : "Delete my account"}
      </button>

      <p style={{ marginTop: 16 }}>
        Changed your mind? <a href="/profile">Go back to Profile</a>.
      </p>
    </div>
  );
}

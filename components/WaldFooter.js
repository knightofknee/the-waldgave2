import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../firebase'

export default function WaldFooter() {
  const router = useRouter()

  return (
    <footer>
      <div>
        <Link href="/" passHref><span className='footer-link'>Waldgrave</span></Link>
        <Link href="/aboutWaldgrave" passHref><span className='footer-link'>Philosophy of the platform</span></Link>
        <a href="https://reddit.com/r/waldgrave" className='footer-link'><span>Q and A forum</span></a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='logout' onClick={() => {
        // todo: log out with firebase
        auth.signOut()
        router.push('Login')}} style={{ width: '80%'}}>
        <span>Log Out</span>
      </div>
      </div>
      <style jsx>{`
        footer {
          background-color: rgb(220, 170, 210);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
        footer > div {
          display: flex;
          justify-content: space-between;
          width: 90%;
        }

        .footer-link {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        border-radius: 2px;
        padding: 5px;
        display: inline-block;
        margin: 5px;
        }

        .logout {
          border: 1px solid white;
          border-radius: 5px;
          margin-bottom: 10px;
          text-align: center;
        }
        footer > div > span {
          cursor: pointer;
          padding: 5px;
          flex: 1 0 auto;
          text-align: center;
        }
        @media (max-width: 600px) {
          footer > div > span {
            padding: 10px 0;
          }
        }
      `}</style>
    </footer>
  )
}

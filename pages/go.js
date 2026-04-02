export default function Go() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>410 - Gone</h1>
      <p>This page has been permanently removed.</p>
      <p>The Waldgrave social media is now available as an <a href="https://apps.apple.com/us/app/bekin-by-the-waldgrave/id6746952014">iOS app</a>.</p>
      <p><a href="/">Back to home</a></p>
    </div>
  );
}

Go.getInitialProps = ({ res }) => {
  if (res) res.statusCode = 410;
  return {};
};

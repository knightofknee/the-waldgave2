import Link from 'next/link'

export default function WaldFooter() {

  return (
    <footer>
      <div>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}><span>Waldgrave</span></Link>
        <Link href="/aboutWaldgrave" style={{ textDecoration: 'none', color: 'inherit' }}><span>Philosophy of the platform</span></Link>
        <a href="https://reddit.com/r/waldgrave" style={{ textDecoration: 'none', color: 'inherit' }}><span>Q and A forum</span></a>
        <span>Log Out</span>
      </div>
      <style jsx>{`
        footer {
          background-color: rgb(220, 170, 210);
          color: white;
          display: flex;
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
        footer > div > span {
          cursor: pointer;
          padding: 5px;
        }
      `}</style>
    </footer>
  )
}

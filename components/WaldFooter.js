import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../firebase'

export default function WaldFooter() {
  const router = useRouter()

  return (
    <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <Link href="/" passHref><span style={{paddingTop: '8px', paddingBottom: '0'}}  className='footer-link'>Waldgrave</span></Link>
        <Link href="/aboutWaldgrave" passHref><span className='footer-link'>Philosophy of the platform</span></Link>
        <a href="https://reddit.com/r/waldgrave" ><span className='footer-link'>Q and A forum</span></a>
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
        footer::before {
          content: '';
          display: block;
          height: 1px; /* Adjust the height to control the thickness of the bar */
          background-color: #FFFFFF; /* This sets the color of the bar */
          width: 100%; /* This makes the bar span the entire width of the footer */
          position: absolute;
          top: 0;
          left: 0;
        }

        footer {
          background-color: rgb(220, 170, 210);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: fixed;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          max-height: 100px;
          margin: 0 auto;
          max-width: 500px;
          left: 50%;
          transform: translateX(-50%);
        }
        footer > div {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          width: 90%;
          flex: 1;
          align-items: center;
        }

        .footer-link {
        display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  height: 100%;
        }

        .footer-link, .logout {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        padding: 4px 10px;
        display: inline-block;
        margin: 5px;
        flex-grow: 1;
        height: 40px;
        text-align: center;
        }

        .logout {
          border: 1px solid white;
          border-radius: 5px;
          text-align: center;
          flex-grow: 0;
          width: 100%;
        }

        .footer-link:hover, .logout:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        footer > div > span {
          cursor: pointer;
          padding: 5px;
          flex: 1 0 auto;
          text-align: center;
        }

          footer > div > span {
            padding: 10px 0;
          }
            .footer-link, .logout {
    height: auto; /* Allows height adjustment based on content */
    flex-direction: column; /* Stacks content vertically */
  }

  @media (min-width: 501px) {
        footer {
    border-top: 1px solid #FFFFFF;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
  }
}

      `}</style>
    </footer>
  )
}

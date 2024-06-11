export default function Loading() {

  return (

<div style={{fontFamily: 'monospace', fontSize: '1.2em', textAlign: 'center'}}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <style jsx>{`
          div > span {
            animation: blink 1s linear infinite;
          }
          div > span:nth-child(2) {
            animation-delay: 0.2s;
          }
          div > span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% {opacity: 0;}
            50% {opacity: 1;}
            100% {opacity: 0;}
          }
        `}</style>
      </div>)}

import { useRouter } from 'next/router';


export default function HomeButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className='smackThat'>
    <button onClick={handleClick} className="home-button">
      <div style={{ display: 'block', margin: '0 auto' }}>
<img src="thew1.png" />
</div>
    </button>
    <style jsx>{`
      .smackThat {
  position: relative;
  text-align: center;
}
  .home-button {
  background-color: transparent;
  border: none;
  padding: 0;
}
          `}</style>
          </div>
  );
}

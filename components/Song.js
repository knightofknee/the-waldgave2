
export default function Song (props) {
  return (
<div>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
    <h3>Lyrics: </h3>
    {props.lyrics && props.lyrics.map((lyricBlock, index) => (
      <div key={"br2"+index}><p>{lyricBlock}</p>
        <br/>
      </div>
    ))}
  </div>
  <button type="click" onClick={() => {props.expandLyrics()}}>close</button>

<style jsx>
{`
p {
  margin: 0 5%;
}

button {
  font-family: 'Instrument Sans', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2c3e50;
  padding: 0.4em 1.3em;
  border: 1px solid rgba(44, 62, 80, 0.4);
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
}
button:hover {
  background: rgba(255, 255, 255, 0.3);
}
`}
</style>

</div>)}

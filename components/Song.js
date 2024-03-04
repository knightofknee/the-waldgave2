
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
`}
</style>

</div>)}

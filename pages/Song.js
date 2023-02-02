
export default function Song (props) {
  return (
<div>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
    <h3>Lyrics: </h3>
    {props.lyrics && props.lyrics.map((lyricBlock, index) => (
      <p key={index}>{lyricBlock}</p>
    ))}
  </div>

<style jsx>
{`
p {
  margin: 0 5%;
}
`}
</style>

</div>)}

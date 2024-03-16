
export default function EntryView (props) {

  return (
    <div>
      <a href={props.link}><span>{props.name}</span></a>
      <p>{props.description}</p>
    </div>
  )
}


export default function EntryView (name, link, description) {

  return (
    <div>
      <a href={link}><span>{name}</span></a>
      <p>{description}</p>
    </div>
  )
}

import EntryView from '../components/EntryView'

export default function Profile () {

  const entries = [];

  return (
    <div>
      <h1>Username</h1>
      <ol>
        {entries.map(e => {
          return (<li>
          <EntryView entryID={e.ID} name={e.name} link={e.link} description={e.description}/>
        </li>)
        })}
      </ol>
    </div>
  )
}

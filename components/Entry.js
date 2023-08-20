
export default function Entry (nameA, linkA, descriptionA, submitEntry) {

  const [name, setName] = useState(nameA);
  const [link, setLink] = useState(linkA);
  const [description, setDescription] = useState(descriptionA);
  return (
    <div>
      <form onSubmit={submitEntry}>
          <label for="name">Name</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
          <label for="link">Link</label>
          <input id="link" value={link} onChange={e => setLink(e.target.value)}></input>
          <label for="description">Description</label>
          <textarea name="description" rows={7} cols={7} value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </form>
        <div></div>
    </div>
  )
}

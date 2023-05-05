
export default function StoryBlock({ title, paragraphArray}) {
  return (
    <div className="story">
      <h5>{title}</h5>
      {paragraphArray.map(p => {
        return <p>{p}</p>
      })}


      <style>
      {`
p {
  margin: 1% 5%;
}

h5 {
  margin: 1% 0% 1% 10%;
  padding-right: 10%;
}

h1, h2, h3, h4, h5 {
  text-align: center;
  background-image: linear-gradient(-40deg, #354882, transparent 100%);
}

.story {
  background-image: linear-gradient(-5deg, rgb(220, 130, 210), transparent 100%);
}
`}
      </style>
    </div>
  )
}

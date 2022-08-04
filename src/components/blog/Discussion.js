export default function Discussion({discussion}) 
{

  return (
    <>
    {/* <h6>{discussion.id}</h6> */}
    <p className="card">{discussion.text}</p>
    <p>Discussion User {discussion.user}</p>
    </>
  )

}
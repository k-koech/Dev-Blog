export default function Discussion({discussion}) 
{

  return (
    <div className="card p-4 mb-2">
      <p>{discussion.text}</p>
      <p className="text-right">{discussion.user}</p>
    </div>
  )

}
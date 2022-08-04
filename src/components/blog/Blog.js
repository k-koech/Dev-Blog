import Discussion from "./Discussion"

export default function Blog({post, onDeletePost}) 
{
    function deletePost() 
    {
      fetch(`https://react-jsonserver.herokuapp.com/posts/${post.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => {
          console.log("deleted!")
          onDeletePost(post)
      });
    }

    function updatePost() 
    {
      fetch(`https://react-jsonserver.herokuapp.com/posts/${post.id}`, {
        method: "PATCH",
      })
        .then((r) => r.json())
        .then(() => {
          console.log("Update!")
          onDeletePost(post)
      });
    }
    
  return (
    <div>
        <div className="card mb-4 p-4 bg-light">
          <h4>{post.title}</h4>
          <p className="">
            {post.content}
          </p>
          <p>{post.date_posted.toString()}</p>
          <div>
            <button onClick={deletePost} className="btn btn-sm btn-outline-danger">Delete</button>
            <button onClick={updatePost} className="btn btn-sm btn-outline-success">Update</button>

          </div>
          <div>
            <h6>By: {post.user}</h6>
          </div>

          <div className="mx-5">
            <h5>Discussion</h5>
            <form>

            </form>
            {
              post.discussion.length>0?(
              post.discussion.map((discussion)=>(
                    <Discussion key={discussion.id} discussion={discussion} />

              ))
              ):
              <h6>No discussion at the moment!!!</h6>
            }
          </div>


        </div>

    </div>
  )
}
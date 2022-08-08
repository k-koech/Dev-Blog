import { useState } from "react";

export default function AddPost({onUpdatePost, post})
{
    const [title, setTitle] = useState("");
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");
    const [time, setTime] = useState(new Date());

    function handlePostSubmit(e)
    {
      e.preventDefault();
      const postData = {title: title, 
        content: content,
        user: user,
        upvotes: 0,
        downvotes: 0,
        date_posted: time,
        discussion: []
      };
      fetch(`https://react-jsonserver.herokuapp.com/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(postData),
        })
      .then((r) => r.json())
      .then((newPost) => {
        onUpdatePost(newPost)
        console.log(newPost)
      });
  
    }
    

    return (
        <>
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={handlePostSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" defaultValue={post.title} onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                        {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" disabled defaultValue={post.user} onChange={(e)=>setUser(e.target.value)} className="form-control" />
                        {/* <small className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label >Content</label>
                        <textarea className="form-control" defaultValue={post.content} onChange={(e)=>setContent(e.target.value)} rows="5"></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )

}
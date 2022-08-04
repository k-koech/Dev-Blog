import { useState } from "react";

export default function AddPost({onAddPost})
{
    const [title, setTitle] = useState("");
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");
    const [time, setTime] = useState(new Date());

    console.log(title," ", user,"  ", content," ", time)

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
      fetch("http://localhost:3007/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(postData),
        })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(newPost)
        console.log(newPost)
      });
  
    }

    return (
        <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={handlePostSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" onChange={(e)=>setUser(e.target.value)} className="form-control" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Content</label>
                        <textarea className="form-control" onChange={(e)=>setContent(e.target.value)} rows="5"></textarea>
                    </div>
                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1">
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Save</button>
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
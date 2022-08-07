import Discussion from "./Discussion"
import {GoArrowUp, GoArrowDown} from "react-icons/go"
import { useState } from "react"
import EditPost from "./EditPost";

export default function Blog({post,onUpdatePost,onDeletePost}) 
{
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  function handleUpvotes()
  {
     setUpvotes((prevValue)=>prevValue+1);
  }
  function handleDownvotes()
  {
     setDownvotes((prevValue)=>prevValue-1)
  }
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

  return (
    <div className="container-fluid">
        <div className="row border mb-4 p-4 bg-light">
          <div className="col-md-9">      
              <div className="d-block text-right mb-2">
                <button onClick={deletePost} className="btn btn-sm btn-outline-danger mx-3">Delete</button>
                <button  className="btn btn-sm btn-outline-success" data-toggle="modal" data-target="#editModal">Update</button>
              </div>  
              <h4>{post.title}</h4>
              <p className="">
                {post.content}
              </p>
              <p>{post.date_posted.toString()}</p>
              <div className="text-right">
                <h6>By <span className="font-italic">{post.user}</span></h6>
              </div>

              <div className="mx-5 p-3 mt-3 bg-white">
                <h5 className="font-weight-bolder">Discussion</h5>
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
          <div className="col-md-3 bg-white d-flex justify-content-center align-items-center">
            <div>
              <div className="mb-3 h1">
                <GoArrowUp onClick={handleUpvotes} />
                <h2 className="text-center">{upvotes}</h2>
              </div>
              <div className="mt-3 text-danger h1">
                <h2 className="text-center" >{downvotes}</h2>
                <GoArrowDown className="cursor-pointer" onClick={handleDownvotes}/>
              </div>
              
            </div>
          </div>
        </div>
        <EditPost onUpdatePost={onUpdatePost} post={post} />

    </div>
    
  )
}
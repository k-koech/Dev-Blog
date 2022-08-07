import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Blog from "./Blog";

export default function Blogs()
{
    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
      fetch("https://react-jsonserver.herokuapp.com/posts")
      .then((post_response)=> post_response.json() )
      .then((posts)=>{
        console.log("Posts ",posts)
        setPosts(posts)
        setIsLoaded(true)

      })
     },[]);
  
   

     function handleAddPost(newPost) 
      {
        setPosts([...posts, newPost])
        console.log("Posts:", newPost);
      }
    function handleUpdatePost(updatedPost) 
      {
        console.log("UPDATED POSTS")
      }
    function handleDeletePost(deletedPost) 
        {
            const updatedPost = posts.filter((post) => post.id !== deletedPost.id);
            setPosts(updatedPost);
        }

    return (
        <div className="px-5 pt-4">
           {isLoaded==false?<h3>Loading...</h3>:""}

            <h1>Blogs</h1>
            <div className="text-right mb-2">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Create Post
                </button>
            </div>
            
            {
                posts.map((post)=>(
                    <Blog key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
                ))
            }

            <AddPost onAddPost={handleAddPost}/>

        </div>
    )
}
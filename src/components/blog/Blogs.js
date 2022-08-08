import { useState, useEffect } from "react";
import "./Blogs.css";
import AddPost from "./AddPost";
import Blog from "./Blog";
import ReactLoading from 'react-loading';

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
        // const updatedPosts = posts.filter((post) => post.id === updatedPost.id);
        // setPosts(updatedPosts);
        console.log("UPDATED POSTS")
      }
    function handleDeletePost(deletedPost) 
        {
            const updatedPost = posts.filter((post) => post.id !== deletedPost.id);
            setPosts(updatedPost);
        }

    return (
        <div className="px-5 pt-4  ">
          <h1>Blogs</h1>            
            <div className="text-right mb-2">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Create Post
                </button>
            </div>
            {isLoaded==false?<div className="loader d-flex justify-content-center align-items-center">
            <ReactLoading type="spin" color="black"  />
            {/* height={667} width={375 */}
           </div>:""}
            {
                posts.map((post)=>(
                    <Blog key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
                ))
            }

            <AddPost onAddPost={handleAddPost}/>

        </div>
    )
}
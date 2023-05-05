import React, { useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import PostList from "../components/PostList";

function DashboardPage() {

    const [posts, setPosts] = useState([]);
    const { currentUser } = useContext(UserContext);

    // gets the posts of the currently logged in user
    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts/userposts/${currentUser.id}`)
            .then(response => {
                setPosts(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // logic for editing a user's post
    const handleUpdatePost = (newPost) => {

        console.log(newPost)
        // let newPostObject = Object.fromEntries(newPost.entries())
        // console.log(newPostObject)
        setPosts((prevPosts) =>
            prevPosts.map((post) => post.id !== Number(newPost.id) ? post : newPost)
        );
    }

    // logic for deleting a user's post
    const handleDelete = (postId) => {

        axios.delete(`http://localhost:8001/api/posts/${postId}`)
            .then(() => {
                const updatedPosts = posts.filter(post => post.id !== postId);
                setPosts(updatedPosts);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (

        <div>
            <NavBar />
            <div className="dash-welcome">
                {/* the welcome message that is displayed depends on whether the user has any posts or not */}
                {posts.length === 0 ? <p>Welcome, {currentUser.username}. You don't have any posts yet.</p> : <p>Welcome, {currentUser.username}. You can manage your posts here.</p>}
            </div>
            {/* if they do have posts they are displayed */}
            {posts.length > 0 && <PostList filteredPosts={posts} onUpdatePost={handleUpdatePost} onDeletePost={handleDelete} />}
        </div>
    )
}

export default DashboardPage;
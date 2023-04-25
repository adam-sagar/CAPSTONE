import React from "react";
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import FilterPosts from "../components/FilterPosts";

function PostsPage() {

    return (

        <div className="PostsPage">
            <NavBar />
            <div className="posts-container">
                <CreatePost />
                <FilterPosts />
            </div>
            <Post />
            
        </div>
    );
}

export default PostsPage;

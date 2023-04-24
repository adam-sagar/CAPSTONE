import React from "react";
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

function PostsPage() {

    return (

        <div className="PostsPage">
            <NavBar />
            <CreatePost />
            <Post />
        </div>
    );
}

export default PostsPage;

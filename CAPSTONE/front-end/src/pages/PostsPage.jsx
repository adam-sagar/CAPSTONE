import React from "react";
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import FilterPosts from "../components/FilterPosts";

function PostsPage() {

    return (

        <div className="PostsPage">
            <NavBar />
            <FilterPosts />
            <Post />
            <CreatePost />
        </div>
    );
}

export default PostsPage;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";

function PostsPage() {

    return (

        <div className="PostsPage">
            <NavBar />
            <CreatePost />
        </div>
    );
}

export default PostsPage;

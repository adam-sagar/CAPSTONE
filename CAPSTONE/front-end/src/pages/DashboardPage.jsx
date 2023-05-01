import React, { useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import PostList from "../components/PostList";

function DashboardPage() {

    const [posts, setPosts] = useState([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts/${currentUser.id}`) 
            .then(response => {
                setPosts(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(currentUser)

    return (

        <div>
            <NavBar />
            <div className="dash-welcome">
                {posts.length === 0 ? <p>Welcome, {currentUser.username}. You don't have any posts yet.</p> : <p>Welcome, {currentUser.username}. You can manage your posts here.</p>}
            </div>
            {posts.length > 0 && <PostList filteredPosts={posts} />}
        </div>
    )
}

export default DashboardPage;
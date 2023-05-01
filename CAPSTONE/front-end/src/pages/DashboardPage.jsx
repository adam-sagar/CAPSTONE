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
            <p>Welcome {currentUser.username} </p>
            <PostList filteredPosts={posts} />
        </div>
    )
}

export default DashboardPage;
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import FilterPosts from "../components/FilterPosts";
import axios from "axios";

function PostsPage() {

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [filters, setFilters] = useState ({
        isFound: '',
        course: '',
        hole: '',
        type: ''
    });

    // gets all the posts from the databse
    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts`)
            .then(response => { setAllPosts(response.data.data); setFilteredPosts(response.data.data)})
    }, [])
    
    // logic for filtering the posts
    useEffect(() => {

        let updatedPosts =
        allPosts.filter(post => (filters.isFound === '' || post.isFound === filters.isFound)
        && (filters.course === '' || post.course === filters.course)
        && (filters.hole === '' || post.hole === filters.hole)
        && (filters.type === '' || post.type === filters.type)
        )
        setFilteredPosts(updatedPosts)
        console.log(updatedPosts)
        console.log(filters)
    }, [filters])

    // adds any new posts to the list of filtered posts
    const handleAddPost = (newPost) => {

        console.log(newPost)
        setAllPosts([...allPosts, newPost]);
        setFilteredPosts([...filteredPosts, newPost]);
    }

    return (

        <div className="PostsPage">
            <NavBar />
            <div className="posts-container">
                <CreatePost onAddPost={handleAddPost}/>
                <FilterPosts filters={filters} setFilters={setFilters} />
            </div>
            {filteredPosts.length === 0 ? (
                <div className="no-posts">No posts found.</div>
            ) : (
            <PostList filteredPosts={filteredPosts} />
            )}
        </div>
    );
}

export default PostsPage;

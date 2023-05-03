import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid, CardActions } from '@mui/material';
import CommentDialog from './CommentDialog';
import EditPost from './EditPost';
import Button from '@mui/material/Button';

function PostList(props) {

    console.log(props.filteredPosts)
    console.log(props.onUpdatePost)

    return (

        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ paddingBottom: 3 }}>
                {props.filteredPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                        <Card sx={{ maxWidth: 300, borderRadius: 2, margin: '0 auto' }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={post.image ? 'http://localhost:8001' + post.image : "/images/discgolfaction.jpg"}
                                title="disc"
                            />
                            <CardContent sx={{ height: 150 }}>
                                <Typography className="roboto-font" gutterBottom variant="h5" component="div" sx={{ mb: 1 }}>
                                    {post.isFound ? "Found" : "Lost"}
                                </Typography>
                                <Typography className="roboto-font" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <Typography className="roboto-font" component="span" sx={{ fontWeight: 'bold' }}>Course:</Typography> {post.course}
                                </Typography>
                                <Typography className="roboto-font" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <Typography className="roboto-font" component="span" sx={{ fontWeight: 'bold' }}>Hole:</Typography> {post.hole}
                                </Typography>
                                {/* added a conditional so type won't display if not selected */}
                                {post.type === '' ? null :  
                                <Typography className = "roboto-font" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <Typography className="roboto-font" component="span" sx={{ fontWeight: 'bold' }}>Type:</Typography> {post.type}
                                </Typography>}
                            </CardContent>
                            <CardActions className="comment-edit-buttons">
                                <CommentDialog postId={post.id} />
                                {props.onUpdatePost && <EditPost postId={post.id} onUpdatePost={props.onUpdatePost} />}
                                {props.onDeletePost && <Button onClick={() => props.onDeletePost(post.id)} className="roboto-font" size="small" sx={{ color: '#6EA15E' }} >Delete</Button>}
                            </CardActions>
                        </Card>
                    </Grid>))}
            </Grid>
        </Container>
    )
}

export default PostList;

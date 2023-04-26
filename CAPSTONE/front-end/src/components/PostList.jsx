import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import CommentDialog from './CommentDialog';

function PostList(props) {

    return (

        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ paddingBottom: 3 }}>
                {props.filteredPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                        <Card sx={{ maxWidth: 300, borderRadius: 2, margin: '0 auto' }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                image="/images/discgolfaction.jpg"
                                title="disc"
                            />
                            <CardContent sx={{ height: 150 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    {post.isFound ? "Found" : "Lost"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Course:</Typography> {post.course}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Hole:</Typography> {post.hole}
                                </Typography>
                                {/* added a conditional so type won't display if user selects "Unsure" */}
                                {post.type === '' ? null :  
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontFamily: 'Roboto Condensed, sans-serif' }}>
                                    <Typography component="span" sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>Type:</Typography> {post.type}
                                </Typography>}
                            </CardContent>
                            <CommentDialog />
                        </Card>
                    </Grid>))}
            </Grid>
        </Container> 
    )
}

export default PostList;

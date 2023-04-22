import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

function Post() {

    const [posts, setPosts] = React.useState([])

    useEffect(() => {

        axios.get(`http://localhost:8001/api/posts`)
            .then(response => { console.log(response); setPosts(response.data) })
            .catch(error => { console.log(error) })
    }, [])

    return (

        // posts.map((post, index) => (
        // <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300, margin: 3 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/images/discgolfaction.jpg"
                    title="disc"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lost or found
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Course:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {/* {post.Course} */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Hole:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {/* {post.Hole} */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Type:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {/* {post.Type} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#6EA15E' }}>Comments</Button>
                </CardActions>
            </Card>
        // </Grid>
    )
    // ))
}

export default Post;

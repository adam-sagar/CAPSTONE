import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PostCard() {

    return (

        <Card sx={{ maxWidth: 345, margin: 3 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/images/discgolfaction.jpg"
                title="disc"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Course:
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Hole:
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Type:
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ fontFamily: 'Roboto Condensed, sans-serif', color: '#6EA15E' }}>Comments</Button>
            </CardActions>
        </Card>
    )
}

export default PostCard;

import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Second.css';
import { blue } from '@mui/material/colors';

const Second = () => {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setOutput(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Grid container spacing={3} justifyContent="center">
            {output.map((val, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i} display="flex" justifyContent="center">
                    <Card
                        sx={{
                            maxWidth: 345,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ 
                                height: 140,
                                objectFit: 'contain',
                                textAlign: 'center',
                                paddingTop: '10px'
                            }}
                            image={val.image}
                            title={val.title}
                        />
                        <CardContent style={{ textAlign: 'center', border: `1px solid ${blue[500]}` }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${val.price}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Second;

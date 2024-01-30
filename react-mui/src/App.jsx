import React, { useState } from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core";
import { ContactMail, PhotoCamera } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from "./style";

const cards = [1,2,3,4,5,6,7,8.9]

function Car() {
    const [car, setCar] = useState({
        brand: "ford",
        model: "Mustang",
        color: "red",
        year: "1934"
    })


    return (
        <>
            <Typography variant="h3">
                My {car.brand}
            </Typography>
            <Typography variant="p">
                It is {car.color} {car.model} from {car.year}
            </Typography>
        </>
    )
}

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" color="textSecondary" align="center" paragraph>
                            This is a Photo Album and here we can see many photo items.
                        </Typography>
                        <div className={classes.Button}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>    
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) =>(
                            <Grid item key={card} xs={12} sm={6} md={6}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia} 
                                        image="https://source.unsplash.com/random"
                                        title="Image Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this to describe this section.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))},
                        
                    </Grid>

                </Container>          

            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Thank You!
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give the footer a purpose.                    
                    We will meet again.
                </Typography>
            </footer>
        </>
    );
}

export default App;
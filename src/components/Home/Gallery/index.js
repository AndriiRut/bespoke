/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

import greenLivingRoom from '../../../assets/img/green-living-room-ideas.jpg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  heroContentTitle: {
    // backgroundColor: theme.palette.background.paper,
    color: '#ffffff',
  },
  heroContentText: {
    // backgroundColor: theme.palette.background.paper,
    color: '#ffffff',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  return (
    <section className="album" id="album">
      <div className="album__bg section section__shadow-bottom">
        <React.Fragment>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography className={classes.heroContentTitle} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Album layout
                </Typography>
                <Typography className={classes.heroContentText} variant="h5" align="center" color="textSecondary" paragraph>
                  Something short and leading about the collection below—its contents, the creator, etc.
                  Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                  entirely.
                </Typography>
              </Container>
            </div>
            {/* <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container> */}
            <div className="photo-gallery">
              <div className="container">
                {/* <div className="intro">
                  <h2 className="text-center">Gallery</h2>
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni</p>
                </div> */}

                <div className="row photos">
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={greenLivingRoom} data-lightbox="photos">
                      <img className="img-fluid" src={greenLivingRoom} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </React.Fragment>
      </div>
    </section>
  );
}
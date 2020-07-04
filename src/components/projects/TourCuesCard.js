import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'

import expo from '../../assets/expo.png'
import japan from '../../assets/22203-japan-scene-300x300.gif'
import { react, nodeJs, graphql, postgreSQL, apollo, github, prisma, heroku, docker } from '../../assets/icons/devIconsSVGs'
import DevIcon from '../ui/DevIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 300,
    //paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#f563b8',
  },
  actionButton: {
    opacity: 0.7,

    '&:hover': {
      opacity: 1,
      cursor: 'pointer'
    },
  }
}));

const JapanAnim = () => {
  return (
    <Grid container justify="center" alignItems="center" >
      <img alt="project gif" src={japan} />
    </Grid>
  )
}

export default function ProjectCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              T
          </Avatar>
          }
          action={
            <Grid container justify="center" alignItems="center">
              <Link rel="noopener noreferrer" href="https://expo.io/@bpmbpmbpm/tourtour-rn" target="_blank"
              >
                <div className={classes.actionButton} >
                  <img alt="expo logo" src={expo} style={{ width: 35, height: 35 }} />
                </div>
              </Link>
              <Link rel="noopener noreferrer" href="https://github.com/bPMathers/tourtour-graphqlAPI" target="_blank"
              >
                <div className={classes.actionButton} >
                  <DevIcon width={35}>{github}</DevIcon>
                </div>
              </Link>
            </Grid>
          }
          title="TourCues"
          subheader="March 2020 - Ongoing"
        />
        <CardMedia
          className={classes.media}
          // title="Tour Cues"
          component={JapanAnim}
        />
        <Grid container justify="center">
          <DevIcon>{react}</DevIcon>
          <DevIcon>{nodeJs}</DevIcon>
          <DevIcon>{graphql}</DevIcon>
          <DevIcon>{apollo}</DevIcon>
          <DevIcon>{postgreSQL}</DevIcon>
          <DevIcon>{docker}</DevIcon>
          <DevIcon>{heroku}</DevIcon>
        </Grid>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;&nbsp;Personal project</span> - A native app for touring artists to share their best spots when touring. Cheap Motels, Late Night Snacks, Dive Bars, Secret Nature Spots, etc!
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="h6">Project Details:</Typography>
            <Typography paragraph variant="body2" color="textSecondary" >
              &nbsp;&nbsp;&nbsp;&nbsp;I created an Expo managed React Native app that uses Apollo Client in tandem with a Heroku-hosted NodeJS server and a dockerized Prisma ORM to circulate GraphQL data that is itself stored in a PostgreSQL DB also hosted on Heroku.
          </Typography>
            <Typography paragraph variant="body2" color="textSecondary">
              &nbsp;&nbsp;&nbsp;&nbsp;As of now, the app makes use of the Google Geolocation and Places APIs, animations, encrypted authorization and image upload & hosting with cloudinary. Many more features, such as DMs between users and comments on places & reviews are on the way.
          </Typography>
            <Typography paragraph variant="body2" color="textSecondary" >
              &nbsp;&nbsp;&nbsp;&nbsp;You can peek at the kanban board & source code by following the Github icon link and load the app on your mobile device with Expo by scanning the QR code on the Expo project page also linked at the top and below
          </Typography>
            <Grid container justify="center" alignItems="center">
              <Link rel="noopener noreferrer" href="https://expo.io/@bpmbpmbpm/tourtour-rn" target="_blank"
              >
                <div className={classes.actionButton} >
                  <img alt="expo logo" src={expo} style={{ width: 35, height: 35 }} />
                </div>
              </Link>
              <Link rel="noopener noreferrer" href="https://github.com/users/bPMathers/projects/2" target="_blank"
              >
                <div className={classes.actionButton} >
                  <DevIcon width={35}>{github}</DevIcon>
                </div>
              </Link>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
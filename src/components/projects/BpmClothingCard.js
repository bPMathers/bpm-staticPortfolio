import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { List, ListItem, ListSubheader, ListItemIcon, ListItemText, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styledComp2 from '../../assets/icons/styledComp.png'
import eComm from '../../assets/e-comm2.jpg'
import { react, nodeJs, stripe, reduxSaga, github, heroku, firebase, internet } from '../../assets/icons/devIconsSVGs'
import DevIcon from '../ui/DevIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 24,
    height: "100%"
  },

  // media: {
  //   height: 300,

  //   //paddingTop: '56.25%', // 16:9
  // },
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
    backgroundColor: '#7974f7',
  },
  actionButton: {
    opacity: 0.7,

    '&:hover': {
      opacity: 1,
      cursor: 'pointer'
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const eCommImg = () => {
  return (
    <Grid container justify="center" alignItems="center" style={{ height: 300 }}>
      <img alt="e-commerce project" src={eComm} />
    </Grid>
  )
}

export default function BpmClothingCard() {
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
            <Avatar aria-label="project" className={classes.avatar}>
              B
          </Avatar>
          }
          action={
            <Grid container justify="center" alignItems="center" >
              <Grid container justify="center" alignItems="center" >
                <Grid item className={classes.actionButton} component="a" href="https://e-commerce-portfolio-app-live.herokuapp.com/" target="_blank">
                  <DevIcon width={28}>{internet}</DevIcon>
                </Grid>
                <Grid item className={classes.actionButton} component="a" href="https://github.com/bPMathers/e-commerce-react-app" target="_blank">
                  <DevIcon width={35}>{github}</DevIcon>
                </Grid>
              </Grid>
            </Grid>
          }
          title="BPM Clothing"
          subheader="2019"
        />
        <CardMedia
          className={classes.media}
          title="BPM Clothing"
          component={eCommImg}
        />
        <Grid container justify="center" alignItems="center" >
          <DevIcon>{react}</DevIcon>
          <DevIcon>{nodeJs}</DevIcon>
          <Grid item>
            <DevIcon width={40}>{reduxSaga}</DevIcon>
          </Grid>
          <Grid item>
            <img alt="styled logo" src={styledComp2} style={{ width: 25, height: 25, marginLeft: 5, marginRight: 3 }} />
          </Grid>
          <Grid item style={{ width: 55 }}>
            <DevIcon>{stripe}</DevIcon>
          </Grid>
          <DevIcon>{firebase}</DevIcon>
          <DevIcon>{heroku}</DevIcon>
        </Grid>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;&nbsp;Personal project</span> - A demo eCommerce web client where users can view and buy clothes.
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
              &nbsp;&nbsp;&nbsp;&nbsp;I created this eCommerce store to explore the possibilites of React with Redux-Saga for asynchronous state management. I also used a demo stripe account to test interaction with the Stripe API. Cart persistence is achieved with the use of Firebase Firestore and a basic NodeJS server used to interact with Stripe is deployed to Heroku.
          </Typography>
            <Typography paragraph variant="body2" color="textSecondary">
              &nbsp;&nbsp;&nbsp;&nbsp;Please use the provided dummy credit card credentials to test the checkout flow.
          </Typography>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  _______
        </ListSubheader>
              }
              className={classes.root}
            >
              <ListItem button component="a" href="https://expo.io/@bpmbpmbpm/tourtour-rn" target="_blank">
                <ListItemIcon>
                  <Grid item className={classes.actionButton} component="a" href="https://e-commerce-portfolio-app-live.herokuapp.com/" target="_blank">
                    <DevIcon width={28}>{internet}</DevIcon>
                  </Grid>
                </ListItemIcon>
                <ListItemText primary="Web Client" />
              </ListItem>
              <ListItem button component="a" href="https://github.com/bPMathers/e-commerce-react-app" target="_blank">
                <ListItemIcon>
                  <DevIcon width={30}>{github}</DevIcon>
                </ListItemIcon>
                <ListItemText primary="Source Code" />
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
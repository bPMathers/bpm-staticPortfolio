import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { List, ListItem, ListSubheader, ListItemIcon, ListItemText, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid, Menu, MenuItem } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import expo from '../../assets/expo2.png'
import japan from '../../assets/22203-japan-scene-300x300.gif'
import { react, nodeJs, graphql, postgreSQL, apollo, github, heroku, docker, kanban } from '../../assets/icons/devIconsSVGs'
import DevIcon from '../ui/DevIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 24,
    height: "100%"
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
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const JapanAnim = () => {
  return (
    <Grid container justify="center" alignItems="center" >
      <img alt="Tour cues project" src={japan} />
    </Grid>
  )
}

export default function TourCuesCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setMenuAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
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
              <div>
                <Grid container justify="center" alignItems="center" >
                  <Grid item component="a" href="https://expo.io/@bpmbpmbpm/tourtour-rn" target="_blank" className={classes.actionButton}>
                    <img alt="expo logo" src={expo} style={{ width: 38, height: 35 }} />
                  </Grid>
                  <Grid item className={classes.actionButton} onClick={handleMenuClick}>
                    <DevIcon width={35}>{github}</DevIcon>
                  </Grid>
                </Grid>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  disableGutters
                  style={{ marginLeft: 40 }}
                >
                  <MenuItem onClick={handleMenuClose} component="a" href="https://github.com/bPMathers/tourtour-rn" target="_blank">
                    <ListItemIcon>
                      <div>
                        <DevIcon width={23}>{react}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <Typography variant="body1" color="textSecondary">Client Repo</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} component="a" href="https://github.com/bPMathers/tourtour-graphqlAPI" target="_blank">
                    <ListItemIcon>
                      <div>
                        <DevIcon width={23}>{nodeJs}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <Typography variant="body1" color="textSecondary">Backend Repo</Typography>
                  </MenuItem>
                  <MenuItem component="a" href="https://github.com/users/bPMathers/projects/2" onClick={handleMenuClose} target="_blank">
                    <ListItemIcon>
                      <div>
                        <DevIcon width={20}>{kanban}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <Typography variant="body1" color="textSecondary">Kanban Board</Typography>
                  </MenuItem>
                </Menu>
              </div>
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
            <span style={{ fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;&nbsp;Personal project</span> - A mobile app for touring artists to share their best spots when on tour. Cheap Motels, Late Night Snacks, Dive Bars, Secret Nature Spots, etc!
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
              &nbsp;&nbsp;&nbsp;&nbsp;As of now, the app makes use of the Google Geolocation and Places APIs, animations, encrypted authorization and image upload & hosting with cloudinary. Many more features, such as DMs between users, comments on places & reviews, data collection from beta-testers and thorough unit and integration tests are on the way.
          </Typography>
            <Typography paragraph variant="body2" color="textSecondary" >
              &nbsp;&nbsp;&nbsp;&nbsp;To try the client app: load it on your mobile device with Expo by scanning the QR code on the linked Expo project page. Source code & kanban board are also linked below.
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
                  <div>
                    <img alt="expo logo" src={expo} style={{ width: 38, height: 35 }} />
                  </div>
                </ListItemIcon>
                <ListItemText primary="Expo Project Page" />
              </ListItem>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  {/* <InboxIcon /> */}
                  <div>
                    <DevIcon width={30}>{github}</DevIcon>
                  </div>
                </ListItemIcon>
                <ListItemText primary="Source Code" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button component="a" href="https://github.com/bPMathers/tourtour-rn" target="_blank" className={classes.nested}>
                    <ListItemIcon>
                      <div>
                        <DevIcon width={30}>{react}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <ListItemText primary="Client repo" />
                  </ListItem>
                  <ListItem button component="a" href="https://github.com/bPMathers/tourtour-graphqlAPI" target="_blank" className={classes.nested}>
                    <ListItemIcon>
                      <div>
                        <DevIcon width={30}>{nodeJs}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <ListItemText primary="Backend repo" />
                  </ListItem>
                  <ListItem button component="a" href="https://github.com/users/bPMathers/projects/2" target="_blank" className={classes.nested}>
                    <ListItemIcon>
                      <div>
                        <DevIcon width={30}>{kanban}</DevIcon>
                      </div>
                    </ListItemIcon>
                    <ListItemText primary="Kanban Board" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
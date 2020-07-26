import React from 'react'
import {
    Typography,
    Grid,
    Button,
    Container,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    } from '@material-ui/core'
import {Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    align: {
        marginTop:25,
        borderBottom: '2px solid #000' 
       
    },
    align1:{
        marginTop:25,
        padding:5,
        
    },
    hover: {
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        }
    },
    root: {
        maxWidth: 345,
        margin:20
    },
    media: {
        height: 200,
      
    },
    align2: {
        margin:10
    },
    image: {
        height: 140,
    },
    root1: {
        width: '100%',
        maxWidth: 360,
      },
    square: {
       height:80,
       width:120,
       margin:10
    },
    
    
});

function Headlines({news}) {
  
    const classes = useStyles()
    return(
        <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={news.urlToImage}
                  title="Headlines"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {news.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {news.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {news.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <a href={news.url}> 
              <Button size="small"  color="primary" className={classes.button} >
                    Learn More
                </Button>
                </a>
            </CardActions>
            </Card>
    )

}

function FolderList({news}){
    const classes = useStyles();
  
    return (
        <List className={classes.root1}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="square" className={classes.square}  src={news.urlToImage} />
          </ListItemAvatar>
          <ListItemText primary={news.title} secondary={news.publishedAt} />
        </ListItem>
        </List>
    )
}


const LatestHeadline = (props) => {

    const classes = useStyles()

    const news = props.news.slice(10,11).map((news) => {
        return (
                <div key={news.id}>
                    <Grid item xs={12}>
                        <Headlines news = {news} />
                    </Grid>
                    
              </div>
            );
            
    });

    const trend = props.news.slice(0,4).map((news) => {
        return (
                <div key={news.id}>
                    <FolderList news = {news} />
              </div>
            );
            
    });
  
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={8}>
            <Typography className={classes.align} variant="h4">
                Latest News
            </Typography>
            </Grid>
            <Grid item className={classes.align1}  xs={4}>
                <Button className={classes.hover} >
                    <Link>Latest</Link>
                </Button>
                <Button className={classes.hover}>
                    Top
                </Button>
                <Button className={classes.hover}>
                    Featured
                </Button>
            </Grid>
        </Grid>
            <Grid container >
                <Grid item xs={4}>
                    {news}
                </Grid>
                <Grid item xs={4}>
                    {news}
                </Grid>
                <Grid item xs={4}>
                    {trend}
                </Grid>
            </Grid>
      </Container>
       
       
    )
}

export default LatestHeadline

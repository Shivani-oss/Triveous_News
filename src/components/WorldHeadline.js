import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin:30
    },
    media: {
        height: 200,
      
    },
    button: {
        marginLeft: 100
    },
    align: {
      marginLeft: 150
    }
  });



function RenderNews({news}) {
  
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

const WorldHeadline = (props) => {

    const headlines = props.news.map((news) => {
        return (
                <div key={news.id}>
                    <Grid item xs={12}>
                      <RenderNews news = {news} />
                  </Grid>
                </div>
            );
            
    });
    const classes = useStyles()
    return (
    <div>
        <Grid container className={classes.align} >
           {headlines}
        </Grid>
    </div>
  )
    
}

export default WorldHeadline

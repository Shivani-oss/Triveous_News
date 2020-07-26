import React from 'react'
import {
    AppBar,
    Typography,
    Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
      header: {
        padding: 10,
      },
      margin: {
          marginLeft:"20%"
      }
    });
    

const Header = () => {

    const classes = useStyles()
    return (
       <>
       <Box>
           <AppBar className={classes.header} style={{background:"#000"}}>
               <Typography className={classes.margin} variant="h5" style={{color:"#fff"}}>
                    Triveous News
               </Typography>
               <Typography className={classes.margin} variant="subtitle1" style={{color:"#fff"}}>
                    Get the Latest News
               </Typography>
           </AppBar>

       </Box>
       </>
    )
}

export default Header

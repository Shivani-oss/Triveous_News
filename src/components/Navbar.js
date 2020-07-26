import React from 'react'
import {
    Typography,
    Grid,
    Box,
    Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink,Link} from 'react-router-dom'





const useStyles = makeStyles({
    align:{
       marginTop:80,
      backgroundColor:'#dfe6e9',
    },
    margin: {
        marginLeft:310,
    }
  });
  
const Navbar = () => {
  

  const classes = useStyles()
    return (
       <>
       <Box>
       <Grid container className={classes.align} >
        <Grid item xs={1}>
          <Typography className={classes.margin} variant="subtitle1" >
            <Button>
            <Link to='/'>Home</Link>        
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.margin} variant="subtitle1" >
            <Button>
            <NavLink activeStyle={{ color: 'red' }} to='/politics'>Politics</NavLink>         
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.margin} variant="subtitle1" >
            <Button>
            <NavLink activeStyle={{ color: 'red' }} to='/business'>Business</NavLink>         
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.margin} variant="subtitle1" >
            <Button>
            <NavLink activeStyle={{ color: 'red' }} to='/world'>World</NavLink>              
            </Button>
          </Typography>
        </Grid>
       </Grid>
      </Box>
       </>
    )
}

export default Navbar

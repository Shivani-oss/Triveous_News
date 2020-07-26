import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import {NEWS} from '../data';
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import HomeHeadline from './HomeHeadline'
import PoliticsHeadline from './PoliticsHeadline'
import BusinessHeadline from './BusinessHeadline'
import WorldHeadline from './WorldHeadline'
import LatestHeadline from './LatestHeadline'
import { Divider } from '@material-ui/core'




class Home extends Component {

    constructor (props){
        super(props);
    
        this.state = {
          news: NEWS
        };
      }


    render() {
        return (
            <>
            <BrowserRouter>
            <Header />
            <Navbar />
            <Switch>
            <Route exact path='/' component={() => <HomeHeadline news={this.state.news.filter((news) => news.category.includes("Home")) }/>}/>
            <Route exact path='/politics' component={() => <PoliticsHeadline news={this.state.news.filter((news) => news.category.includes("Politics")) }/>}/>
            <Route exact path='/business' component={() => <BusinessHeadline news={this.state.news.filter((news) => news.category.includes("Business")) }/>}/>
            <Route exact path='/world'    component={() => <WorldHeadline news={this.state.news.filter((news) => news.category.includes("World")) }/>}/>
            </Switch>
            <Divider />
            <LatestHeadline news={this.state.news}/>
            </BrowserRouter>
            </>
        )
    }     
}



export default Home





import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route} from 'react-router-dom'
import Hero from './components/Hero';
// import Section from './components/Section';
import Footer from './components/Footer';
import axios from 'axios';
import Bulma from '../node_modules/bulma';
import NewestUploads from './components/NewestUploads';
import MostPopular from './components/MostPopular'
import HomePage from './components/HomePage'
import SingleLaunch from './components/SingleLaunch'


class App extends Component {
  state = {
    recentMedia: [], //fill this array of beers with beers from the api
    //randomMedia: [],
    //query: 'mars',
    ready: false,
    showLaunch: false
  }

  async componentDidMount(){
      //console.log('happens once on mount')
      //https://images-api.nasa.gov/asset/?orderby=popular
      //.then promise 
      let latestLaunch = await axios.get(`https://api.spacexdata.com/v3/launches/latest`)//This takes some time by the time it gets back 
          console.log(latestLaunch.data)

      let allLaunches = await axios.get(`https://api.spacexdata.com/v3/launches/past`)//This takes some time by the time it gets back 
          console.log(allLaunches.data)


      // let results = response.data.collection.items;
      // results.sort((b,a) => {
      //   let [monthA, dayA] = [a.data[0].date_created.split('-')[1], parseInt(a.data[0].date_created.split('-')[2])];
      //   let [monthB, dayB] = [b.data[0].date_created.split('-')[1], parseInt(b.data[0].date_created.split('-')[2])];
      //   // console.log(monthA, monthB, dayA, dayB);
      //   if(monthA === monthB) return dayA - dayB;
      //   return monthA - monthB;
      // });
      // console.log(results);

          this.setState({
            latestLaunch:latestLaunch.data,
            allLaunches: allLaunches.data,
            // randomMedia:recent.data,
            ready: true
      })
      
  }

  render() {
    return (
      <div>
        <div className="App">
    <Navbar />
    <Hero />
    {/* <Hero /> */}
    <Switch>
          <Route exact path ="/" render={(props) => <HomePage {...props} />}/>
          {/* <Route exact path ="/NavBar" render={(props) => <NavBar {...props} />}/> */}
          <Route exact path ="/newest-uploads" render={(props) => <NewestUploads {...props} latestLaunch={this.state.latestLaunch} ready={this.state.ready}/>}/>
          <Route exact path ="/all-launches" render={(props) => <MostPopular {...props} allLaunches={this.state.allLaunches} ready={this.state.ready}/>}/>
          {this.state.showLaunch && <Route exact path ="/" />}
          {/* <Route exact path ="/new-beer" render={(props) => <NewBeer {...props} />}/>
          <Route exact path ="/single-beer/:beername" render={(props) => <SingleBeer {...props} beers={this.state.beers} ready={this.state.ready}/>}/> */}
    </Switch>
    <button onClick={() => this.setState({showLaunch: !this.state.showLaunch})} ></button>
    {/* <Section /> */}
    <Footer />
    </div>
      </div>
    );
  }
}

export default App;

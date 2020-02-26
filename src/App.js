import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, Link} from 'react-router-dom'
import Hero from './components/Hero';
// import Section from './components/Section';
import Footer from './components/Footer';
import axios from 'axios';
import Bulma from '../node_modules/bulma';
// import LatestLaunch from './components/LatestLaunch';
import PreviousLaunches from './components/PreviousLaunches'
import HomePage from './components/HomePage'
import Random from './components/Random'


class App extends Component {
  state = {
    recentMedia: [], //fill this array of beers with beers from the api
    //randomMedia: [],
    //query: 'mars',
    ready: false,
    showLaunch: false,
    query: '',
    results: [],
    allLaunches: [],
    filteredLaunches: [],
    focus:false,
    loading: true
  }

  focus = () => {
    this.setState({focus:!this.state.focus})
  }

  blur = () => {
    this.setState({focus:false})
  }
  // getInfo = () => {
  //   let API_URL = "https://api.spacexdata.com/v3/launches/past"
  //   axios.get(`${API_URL}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data,
  //         loading: false
  //       })
  //     })
  // }

  handleInputChange = (e) => {
    console.log(e.target.value)
    
    this.setState({
      query: e.target.value,
      focus:true
    // }, () => {
    //   if (this.state.query && this.state.query.length > 1) {
    //     if (this.state.query.length % 2 === 0) {
    //       this.getInfo()
    //     }
    //   } else if (!this.state.query) {
    //   }
    })
    this.filterTheLaunches(e.target.value)
  }


  filterTheLaunches = (query) => {
    let filteredLaunches = this.state.allLaunches.filter(eachLaunch => {
      return eachLaunch.mission_name.toLowerCase().includes(query)
    })
    this.setState({
      filteredLaunches
    })
  }

  async componentDidMount(){
      //console.log('happens once on mount')
      //.then promise 
      
      let latestLaunch = await axios.get(`https://api.spacexdata.com/v3/launches/latest`)//This takes some time by the time it gets back 
          console.log(latestLaunch.data)

      let allLaunches = await axios.get(`https://api.spacexdata.com/v3/launches/past`)//This takes some time by the time it gets back 
          console.log(allLaunches.data)

          this.setState({
            latestLaunch:latestLaunch.data,
            allLaunches: allLaunches.data,
            filteredLaunches: allLaunches.data,
            // randomMedia:recent.data,
            ready: true,
            loading: false
      })
      
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.toggleFoodForm()
    console.log('submit ', this.state)
    let newLaunch = [...this.state.allLaunches]
    newLaunch.unshift({
      missionName    :this.state.mission_name,
      image   :this.state.image,
      calories:this.state.calories,
      quantity: this.state.quantity
    })

    this.setState({
      launch: newLaunch
    })
  }

  showFilteredLaunches = () => {
    console.log("heyyy")
    //console.log(this.state.filteredLaunches.splice(0,4))
    return this.state.filteredLaunches.slice(0,10).map(eachLaunch => {
      return <div key={eachLaunch}>
      <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={eachLaunch.links.mission_patch} alt="Placeholder i" />
        </figure>
      </div>
      <div className="media-content">
      <Link to={`/all-launches/${eachLaunch.mission_name}`}><p className="title is-4">{eachLaunch.mission_name}</p></Link>
        <p className="subtitle is-6">{eachLaunch.rocket.rocket_name}</p>
      </div>
    </div>

    <div className="content">
      {eachLaunch.details}
      {/* Phasellus nec iaculis mauris. <a>@bulmaio</a>. */}
      {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
      <br></br>
      <time dateTime="2016-1-1">{eachLaunch.launch_date_local.slice(0,10)}</time>
    </div>
  </div>
</div>
</div>
    })
  }

  render() {
    return (
      <div>
        <div className="App">
    <Navbar handleInputChange={this.handleInputChange} loading={this.state.loading} focus={this.focus} blur={this.blur} allLaunches={this.state.allLaunches} />
      {this.state.focus ? this.showFilteredLaunches() : ''}
    <Hero />
    {/* <Hero /> */}
    <Switch>
          <Route exact path ="/" render={(props) => <HomePage {...props} />}/>
          {/* <Route exact path ="/NavBar" render={(props) => <NavBar {...props} />}/> */}
          {/* <Route exact path ="/latest-launch" render={(props) => <LatestLaunch {...props} latestLaunch={this.state.latestLaunch} ready={this.state.ready}/>}/> */}
          <Route exact path ="/all-launches/:launch" render={(props) => <PreviousLaunches {...props} allLaunches={this.state.allLaunches} filteredLaunches={this.state.filteredLaunches} ready={this.state.ready}/>}/>
          {/* <Route exact path ="/upcoming-launches" render={(props) => <UpcomingLaunches {...props} upcomingLaunches={this.state.upcomingLaunches} ready={this.state.ready} />}/> */}
          <Route exact path ="/random-launch" render={(props) => <Random {...props} allLaunches={this.state.allLaunches} ready={this.state.ready} />}/>
          {/* {this.state.showLaunch && <Route exact path ="/all-launches" />} */}
          {/* <Route exact path ="/new-beer" render={(props) => <NewBeer {...props} />}/>
          <Route exact path ="/single-beer/:beername" render={(props) => <SingleBeer {...props} beers={this.state.beers} ready={this.state.ready}/>}/> */}
    </Switch>
    
    {/* <Section /> */}
    <Footer />
    </div>
      </div>
    );
  }
}

export default App;
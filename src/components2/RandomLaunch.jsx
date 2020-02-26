import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomLaunch extends Component {
  displayFiveLatestLaunches = () => {
    let randomLaunch = this.props.allLaunches[Math.floor(Math.random()*this.props.allLaunches.length)];
    return(
      <div >
        <Link to={`/all-launches/${randomLaunch.mission_name}`}><h1>{randomLaunch.mission_name}</h1></Link>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.ready? (this.displayFiveLatestLaunches()) : ("Loading...")}
      </div>
    );
  }
}

export default RandomLaunch;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FeelingSpacey extends Component {
  displayFiveLatestLaunches = () => {
    return this.props.allLaunches.splice(0,5).map((eachLaunch, index) => {
      return(
        <div key={index}>
          <Link to={`/all-launches/${eachLaunch.mission_name}`}><h1>{eachLaunch.mission_name}</h1></Link>
          <h2>{eachLaunch.flight_number}</h2>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.props.ready? (this.displayFiveLatestLaunches()) : ("Loading...")}
      </div>
    );
  }
}

export default FeelingSpacey;
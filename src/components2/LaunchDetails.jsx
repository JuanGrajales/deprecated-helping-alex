import React, { Component } from 'react';

class LaunchDetails extends Component {
  showDetailsOfASingleLaunch = () => {
    let theLaunch = this.props.allLaunches.find(eachLaunch => {
      console.log(eachLaunch.mission_name)
      return eachLaunch.mission_name === this.props.match.params.launchName;
    });

    return (
      <div>
        {theLaunch.mission_name}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.ready? (this.showDetailsOfASingleLaunch()) : ("Loading...")}
      </div>
    );
  }
}

export default LaunchDetails;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllLaunches extends Component {
  state = {
    index: 89,
  };

  // componentDidMount = async () => {
  //   let currentMissionObj = await this.props.allLaunches[this.state.index]

  //   this.setState({
  //     eachMissionObj: currentMissionObj
  //   })
  // }

  displayOneLaunchAtATime = () => {
    let eachMissionObj = this.props.allLaunches[this.state.index]
    return(
      <div>
        <Link to={`/all-launches/${eachMissionObj.mission_name}`}><h1>{eachMissionObj.mission_name}</h1></Link>
        <button
          className="button"
          disabled={this.state.index < 89 ? false : true}
          onClick={() =>
            this.setState({
              index:
                this.state.index < 89 ? this.state.index + 1 : this.state.index
            })
          }
        >
          Next Launch
        </button>
        <button
          className="button"
          disabled={this.state.index > 0 ? false : true}
          onClick={() =>
            this.setState({
              index:
                this.state.index > 0 ? this.state.index - 1 : this.state.index
            })
          }
        >
          Previous Launch
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.ready? (this.displayOneLaunchAtATime()) : ("Loading...")}
      </div>
    );
  }
}

export default AllLaunches;
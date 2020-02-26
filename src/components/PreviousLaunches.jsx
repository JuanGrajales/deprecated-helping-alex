import React, { Component } from "react";
import YouTube from "react-youtube";
// import { Link } from "react-router-dom";



class PreviousLaunches extends Component {
  state = {
    index: 89,
    count: 89
  };



  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  changeIndex = () => {

  }

  showLoadingScreen = () => {
    return (
      <div>
        {" "}
        <progress className="progress is-large is-info" max="100">
          60%
        </progress>
      </div>
    );
  };

  // componentDidMount() {
  //   console.log("this.props jdwanshjrnfsef", this.props.allLaunches )
  //   const hey = this.props.allLaunches.map(item => {
  //     console.log("item", item)
  //     return this.props.match.params.launch === item.mission_name
  //   } )
  //   console.log("hey ooeneoneoneoneoenoen", hey)
  //   // console.log(this.props.allLaunches.findIndex(item => this.props.match.params.launch === item.mission_name ), this.props.allLaunches, this.props.match.params.launch)
  //   this.setState({
  //     index: this.props.allLaunches.findIndex(item => this.props.match.params.launch === item.mission_name ) || 89
  //   })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.match.params.launch !== this.props.match.params.launch) {
  //     this.setState({
  //       index: this.props.allLaunches.findIndex(item => this.props.match.params.launch === item.mission_name )
  //     })
  //   }
  //   console.log("params launch", this.props.match.params.launch, this.props.allLaunches.findIndex(item => this.props.match.params.launch === item.mission_name))
  // }

  showNewestUploads = (launchData, missionName) => {

    // const allLaunchData = launchData[missionIndex]
    const allLaunchData = launchData.find(launch => launch.mission_name === missionName)
    // console.log("alllaunches", allLaunchData[missionIndex]);
    const opts = {
      height: "390",
      width: "640"
    };

    
    return (
      <section className="section">
        <div className="container is-fluid">
          <h1 className="title">{allLaunchData && allLaunchData.mission_name} Mission</h1>
          <br></br>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    {/* {this.displayImages()} */}

                    <h1 className="title">
                      {allLaunchData &&allLaunchData.mission_name} Lift Off!
                    </h1>
                    <figure className="image is-3by5">
                      <img src={allLaunchData.links && allLaunchData.links.flickr_images} alt="" />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">
                    Watch The {allLaunchData.mission_name} Mission Launch!
                  </p>
                  <div className="content">
                    {/* <!-- Content --> */}
                    <YouTube
                      className="container is-fluid"
                      playsInline
                      videoId={allLaunchData.links && allLaunchData.links.youtube_id}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Mission Logo</p>

                  {/* <!-- Content --> */}
                  <img src={allLaunchData.links && allLaunchData.links.mission_patch_small} alt="" />
                  <br></br>
                  <br></br>
                  <p className="title">Launch Date</p>
                  <div className="content">
                    <p className="subtitle">
                      {/* {allLaunchData && allLaunchData.launch_date_local.slice(0, 10)} */}
                      {allLaunchData.launch_date_local ? allLaunchData.launch_date_local.slice(0, 10) : "No Date"}
                    </p>
                  </div>
                  {/* <!-- Content --> */}
                  <p className="title">Rocket Name</p>
                  <div className="content">
                    <p className="subtitle">
                      {allLaunchData.rocket && allLaunchData.rocket.rocket_name}
                    </p>
                  </div>
                  <p className="title">Manufacturer</p>
                  <div className="content">
                    <p className="subtitle">
                      {
                        allLaunchData.rocket && allLaunchData.rocket.second_stage.payloads[0]
                          .manufacturer
                      }
                    </p>
                    <br></br>
                  </div>
                </div>
              </article>
              <article className="tile is-child notification is-primary">
                <div className="content">
                  <p className="title">Details</p>
                  <p className="subtitle">{allLaunchData.details}</p>
                </div>
                <br></br>
              </article>

              <article className="tile is-child notification is-warning">
                <p className="title">Learn More</p>
                <div className="content">
                  <p className="subtitle">
                    <a
                      className="button is-warning"
                      href={allLaunchData.links && allLaunchData.links.reddit_campaign}
                    >
                      {" "}
                      Reddit Campaign
                    </a>
                  </p>
                  <div className="content">
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={allLaunchData.links && allLaunchData.links.presskit}
                      >
                        {" "}
                        Press Kit
                      </a>
                    </p>
                    <p className="subtitle">
                      <a
                        className="button is-warning"
                        href={allLaunchData.links && allLaunchData.links.wikipedia}
                      >
                        {" "}
                        Wikipedia
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* <button
          className="button"
          disabled={this.state.count < this.props.allLaunches.length ? false : true}
          onClick={() =>
            this.setState({
              count:
                this.state.count < this.props.allLaunches.length ? this.state.count + 1 : this.state.count
            })
            // this.props.history.push(`/all-launches/${this.props.allLaunches[this.state.count < 89 ? this.state.count + 1 : this.state.count].mission_name}`)
          }
        >
          Next Launch
        </button>
        <button
          className="button"
          disabled={this.state.count > 0 ? false : true}
          onClick={() =>
            this.setState({
              count:
                this.state.count > 0 ? this.state.count - 1 : this.state.count
            })
          }
        >
          Previous Launch
        </button> */}
        {/* <Link to={`/all-launches/${allLaunchData[this.state.index+1].mission_name}`} >test</Link>  */}
      </section>
    );
    // })
  };

  render() {
    console.log('vvvvvvv', this.props.match.params.launch)
    return (
      <div>
        {/* {this.props.ready ? (this.showNewestUploads()) : (this.showLoadingScreen())} */}
        {this.props.ready ? this.showNewestUploads(this.props.allLaunches, this.props.match.params.launch) : ("Loading...")}
      </div>
    );
  }
}

export default PreviousLaunches;

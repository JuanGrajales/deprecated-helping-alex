import React, { Component } from 'react';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom';


class NewestUploads extends Component {

  
    // displayImages = () => {
    //   return this.props.latestLaunch.links.flickr_images.map((newImage,i) => {
    //     return <section key={i}>
    //       <img className='' src={newImage} alt =''/>
    //      </section>
    //   })
    // }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    showLoadingScreen = () => {
      return <div> <progress class="progress is-large is-info" max="100">60%</progress>
      </div>
    }
    
    showNewestUploads = () => {
        console.log(this.props.latestLaunch)
        const opts = {
            height: '390',
            width: '640'
          };
        // let results = this.props.latestLaunch.data.collection.items;
        // return this.props.latestLaunch.map((newMedia,i)  => { key={i}
        return <section className="section" >
          
                <div className="container is-fluid">
        <h1 className="title">{this.props.latestLaunch.mission_name} Mission</h1>
        <br></br>
      <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
        {/* {this.displayImages()} */}
          
        <h1 className="title">{this.props.latestLaunch.mission_name} Lift Off!</h1>
          <figure className="image is-3by5" >
          <img src={this.props.latestLaunch.links.flickr_images} alt =''/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Watch The {this.props.latestLaunch.mission_name} Mission Launch!</p>
        <div className="content">
          {/* <!-- Content --> */}
          <YouTube 
            className='container is-fluid'
            playsInline
            videoId="8xeX62mLcf8"
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
          <img src={this.props.latestLaunch.links.mission_patch_small} alt =''/>
          <br></br>
          <br></br>
          <p className="title">Launch Date</p>
        <div className="content">
          <p className="subtitle">{this.props.latestLaunch.launch_date_local.slice(0,10)}</p>
          </div>
          {/* <!-- Content --> */}
          <p className="title">Rocket Name</p> 
          <div className="content">
          <p className="subtitle">{this.props.latestLaunch.rocket.rocket_name}</p>
          <br></br>
        </div>
        
        
        
      </div>
    </article>
    <article class="tile is-child notification is-primary">
    <div className="content">
    <p className="title">Details</p>
          <p className="subtitle">{this.props.latestLaunch.details}</p>
          </div>
          <p className="title">Learn More</p> 
          <div className="content">
          <p className="subtitle"><Link to={this.props.latestLaunch.links.presskit}> Press Kit</Link></p>
          <p className="subtitle"><Link to={this.props.latestLaunch.links.Wikipedia}> Wikipedia</Link></p>
          </div>
        </article>
        
        <article class="tile is-child notification is-warning">
        <p className="title">Join The Conversation!</p> 
          <div className="content">
          <p className="subtitle"><Link to={this.props.latestLaunch.links.reddit_campaign}> Reddit Campaign</Link></p>

          </div>
        </article>
  </div>

</div>
    </div>
  </section>
        // })
    }


    render() {
        return (
            <div>
              
  {this.props.ready? (this.showNewestUploads()) : (this.showLoadingScreen())}
            </div>
        );
    }
}

export default NewestUploads;
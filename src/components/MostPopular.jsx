import React, { Component } from 'react';
import YouTube from 'react-youtube';

class MostPopular extends Component {


    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
    showNewestUploads = () => {
        console.log(this.props.allLaunches)
        const opts = {
            height: '390',
            width: '640'
          };
        // let results = this.props.latestLaunch.data.collection.items;
        return this.props.allLaunches.map((newMedia,i)  => {
        return <section className="section " key={i}>
                <div className="container">
      <h1 className="title">Mission</h1>
      <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Launch Date</p> 
          <p className="subtitle">{newMedia.launch_date_local.slice(0,10)}</p>
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">Mission Overview</p>
          <p className="subtitle">{newMedia.cargo_manifest}</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">{newMedia.mission_name}</p>
          <p className="subtitle">{newMedia.rocket.rocket_name}</p>
          <figure className="image">
            <img src={newMedia.links.flickr_images} alt =''/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Socials</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
          {/* <!-- Content --> */}
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Details</p>
        <p className="subtitle">{newMedia.details}</p>
        <div className="content">
          {/* <!-- Content --> */}
        </div>

      </div>
    </article>
  </div>
 
</div>
 <div className="tile is-parent">
      <article className="tile is-child notification is-dark">
        <p className="title">Watch the Launch!</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
          {/* <!-- Content --> */}
          <YouTube
        videoId="8xeX62mLcf8"
        opts={opts}
        onReady={this._onReady}
      />
        </div>
      </article>
    </div>
    </div>
  </section>
        })
    }


    render() {
        return (
            <div>
  {this.props.ready? (this.showNewestUploads()) : ("Loading....")}
            </div>
        );
    }
}

export default MostPopular;
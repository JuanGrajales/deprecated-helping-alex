import React, { Component } from 'react';
// import NewestUploads from './NewestUploads';
// import MostPopular from './MostPopular';
// import Random from './Random';
import MediaDetails from './MediaDetails';


class Section extends Component {
    render() {
        return (
            <div>
                <section className="section">
                <div className="container">
      {/* <h1 className="title">Section</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
      <MediaDetails />
      
    </div>
  </section>
            </div>
        );
    }
}

export default Section;
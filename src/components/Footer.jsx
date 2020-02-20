import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>NASA</strong> API by<Link to="https://github.com/Acostan13"> Alex Costan</Link>.
    </p>
  </div>
</footer>
            </div>
        );
    }
}

export default Footer;
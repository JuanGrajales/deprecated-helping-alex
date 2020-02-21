import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container is-fluid">
                    <nav className="level is-mobile">
                        {/* <!-- Left side --> */}
                        <div className="level-left">
                            <div className="level-item">
                                <p className="subtitle is-5">
                                    <strong>NASA</strong> API
                                </p>
                            </div>
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" placeholder="Find a post" />
                            </p>
                            <p className="control">
                                <button className="button">
                                    Search
                                </button>
                            </p>
                    </div>
            </div>
        </div>

  {/* <!-- Right side --> */}
  <div className="level-right">
    <Link to='/'><img className="level-item image is-48x48" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg10.deviantart.net%2F0773%2Fi%2F2016%2F136%2Fb%2Fd%2Fnasa_wormball_by_squizit-da2r03a.png&f=1&nofb=1' alt='NASA'/></Link>
    <p className="level-item"><Link to='/newest-uploads'>Latest Launch</Link></p>
    <p className="level-item"><Link to="/all-launches">All Launches</Link></p>
    <p className="level-item"><Link to='/'>Random</Link></p>
    {/* <p className="level-item"><Link to='/' className="button is-success">New</Link></p> */}
  </div>
</nav>
                </div>
            </div>
        );
    }
}

export default Navbar;
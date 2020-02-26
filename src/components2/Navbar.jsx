// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';


// class Navbar extends Component {

//   showLoadingScreen = () => {
//     return <div> <progress className="progress is-large is-info" max="100">60%</progress>
//     </div>
//   }

//     render() {
//       console.log(this.props)
//         return (
//             <div>
//                 <div className="container is-fluid">
//                     <nav className="level is-mobile">
//                         {/* <!-- Left side --> */}
//                         <div className="level-left">
//                             <div className="level-item">
//                             <Link to='/'><p className="subtitle is-5">
//                                 <strong>SpaceX</strong> Launch
//                                 </p></Link>
//                             </div>
//                     <div className="level-item">
//                         <div className="field has-addons">
//                           {this.props.loading ? 
//                           <>{this.showLoadingScreen()}</>:<>
//                                 <p className="control">
//                                 <input className="input" onBlur={this.props.blur} onChange={this.props.handleInputChange} type="text" placeholder="Find a launch" />
//                             </p>
//                             <p className="control">
//                                 <button className="button" onClick={this.props.focus}>
//                                     I'm Feeling Spacey
//                                 </button>
//                             </p>
// </>
//                           }
                            
//                     </div>
//             </div>
//         </div>

//   {/* <!-- Right side --> */}
//   <div className="level-right">
//     <Link to='/'><img className=" is-rounded image is-96x96" src='https://crealab.com.mx/blog/wp-content/uploads/2019/03/spacex-logo-1170x658.png' alt='NASA'/></Link>
    
//     <p className="level-item"><Link to={`/all-launches/:launch`}>All Launches</Link></p>
//     {/* <p className="level-item"><Link to="/upcoming-launches">Upcoming</Link></p> */}

//     <p className="level-item"><Link to='/random-launch'>Random</Link></p>
//     {/* <p className="level-item"><Link to='/' className="button is-success">New</Link></p> */}
//   </div>
// </nav>
//                 </div>
                
//             </div>
//         );
//     }
// }

// export default Navbar;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <p className="subtitle is-5">
            <strong>SpaceX</strong> Launch
          </p>
        </Link>
        <Link to='/'><img style={{width: "80px"}} src='https://crealab.com.mx/blog/wp-content/uploads/2019/03/spacex-logo-1170x658.png' alt='NASA'/></Link>
        <br/>
        <input className="input" onChange={this.props.handleInputChange} type="text" placeholder="Find a launch" />
        <Link to="/feeling-spacey">I'm Feeling Spacey</Link>
        <br/>
        <Link to='/all-launches'>All Launches</Link>
        <br/>
        <Link to='/random-launch'>Random Launch</Link>
      </div>
    );
  }
}

export default Navbar;
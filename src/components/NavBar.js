import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * NavBar component
 */
class NavBar extends Component {
  render() {
    const style = {
      verticalAlign: 'middle'
    }
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/"><i className="fa fa-2x fa-tree text-success" style={style}></i></a> Park<font className="text-success">Premi</font> \\ Your Park Ranger \\</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/"><font className="btn btn-sm btn-info">Home</font></Link>
            <Link className="p-2 text-dark" to="/parks"><font className="btn btn-sm btn-success">Parks</font></Link>
            <Link className="p-2 text-dark" to="/about"><font className="btn btn-sm btn-secondary">About</font></Link>
          </nav>
      </div>
    );
  }
}

export default NavBar;
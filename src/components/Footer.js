/**
 * @author ritesh patel 
 * @description Footer component
 */
import React, { Component } from 'react';

class Footer extends Component {
  /**
   * @function renders component
   */
  render() {
    const styles = {
        fontSize: '12px',
        color: '#777'
    }
    return (
       <div className="text-center" style={styles}>
           <hr />
           Made with <i className="fa fa-heart text-danger"></i> by: Ritesh Patel | <i className="fab fa-react text-info"></i> Powered by React | <i className="fab fa-node-js text-secondary"></i> Resting on Node
       </div>
    );
  }
}

export default Footer;
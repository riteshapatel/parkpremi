import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getParksQuery } from '../queries/queries';

class ParkList extends Component {

  displayParks () {
      let data = this.props.data;
      const tdStyle = {
          textAlign: 'center'
      }
      if (data.loading) {
          return <tr><td>Loading...</td></tr>
      } else {
          return data.state_parks.map(park => {
              return(
                <tr key={park.id}>
                    <td nowrap="true"><strong><font className="text-secondary">{park.name}</font></strong><br /><br />
                        <button className="btn btn-sm btn-info" title="Restaurants"><i className="fa fa-utensils"></i></button>&nbsp;
                        <button className="btn btn-sm btn-success" title="Directions"><i className="fas fa-map-pin"></i></button>&nbsp;
                        <button className="btn btn-sm btn-warning" title="Visitor Centers"><i className="fa fa-car"></i></button>&nbsp;
                        <button className="btn btn-sm btn-secondary" title="Things to do"><i className="fas fa-clipboard-list"></i></button>&nbsp;
                        <button className="btn btn-sm btn-danger" title="Images"><i className="fas fa-image"></i></button>
                    </td>
                    <td>{park.description}</td>
                    <td style={tdStyle}><i className="fab fa-free-code-camp text-success"></i></td>
                    <td style={tdStyle}><i className="fas fa-comments text-info"></i></td>
                </tr>
              )
          })
      }
  }
  render() {
    const contentStyle = {
        textAlign: 'center'
    }
    return (
      <div style={contentStyle}>
        <h5 className="text-success">{this.props.state_name} National Parks</h5>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Campgrounds</th>
                    <th scope="col">Reviews</th>
                </tr>
            </thead>
            <tbody>
                {this.displayParks()}
            </tbody>
        </table>
        <br /><br />
        <hr />
        <div className="lighttext text-center smallfonts">
            <i className="fa fa-utensils text-info"></i> - Restaurants |
            <i className="fas fa-map-pin text-success"></i> - Directions |
            <i className="fa fa-car text-warning"></i> - Visitor Centers |
            <i className="fas fa-clipboard-list text-secondary"></i> - Things To Do |
            <i className="fas fa-image text-danger"></i> - Images<br />
        </div>
      </div>
    );
  }
}

export default graphql(getParksQuery)(ParkList);
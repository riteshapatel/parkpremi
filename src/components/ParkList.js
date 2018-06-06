/**
 * @author ritesh patel 
 * @description Park list component. 
 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getParksQuery } from '../queries/queries';

class ParkList extends Component {
    /**
     * @function builds list
     */
    displayList () {
        let data = this.props.data;
        if (data.loading) {
            return <div className="row"><div className="col">Loading...</div></div>
        } else {
            return (data.state_parks.map((park, index) => {
                return(
                    <div className="row" key={park.id}>
                        <div className="col">
                            <br />
                            <h6><strong><i className="fa fa-tree text-success"></i> {park.name}</strong></h6><i>{park.designation}</i><br />
                            {park.description}
                            <br /><br />
                            <a className="btn btn-sm btn-info" title="Restaurants"><i className="fa fa-utensils"></i></a>&nbsp;
                            <a className="btn btn-sm btn-warning" title="Visitor Centers"><i className="fa fa-car"></i></a>&nbsp;
                            <a className="btn btn-sm btn-secondary" title="Things to do"><i className="fas fa-clipboard-list"></i></a>&nbsp;
                            <a className="btn btn-sm btn-danger" title="Images"><i className="fas fa-image"></i></a>&nbsp;
                            {park.directionsUrl ? <a className="btn btn-sm btn-success" title="Directions" href={park.directionsUrl}><i className="fas fa-map-pin"></i></a> : ''}&nbsp;
                            <hr />
                        </div>
                    </div>
                )
            }))
        }
    }
  
    /**
     * @function renders component
     */
    render() {
        const contentStyle = {
            textAlign: 'left',
            padding: '5px'
        },
        inlineStyle = {
            display: 'inline'
        }
        return (
        <div style={contentStyle} className="park-list">
            <h5 className="text-success" style={inlineStyle}>{this.props.state_name} Parks & Monuments</h5>&nbsp;
            {this.displayList()}
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
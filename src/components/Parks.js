import React, { Component } from 'react';
import ParkList from './ParkList';
import '../App.css';
import { graphql } from 'react-apollo';
import { getStatesQuery } from '../queries/queries';

class Parks extends Component {
    /**
     * @constructor
     * @param {Object} props 
     */
    constructor (props) {
        super(props);

        this.state = {
            selected: 'AL',
            state_name: 'Alabama',
            active: false
        }
    }
    
    /**
     * @function builds left menu
     */
    buildMenu () {
        let data = this.props.data;

        if (data.loading) {
            return <div>Loading...</div>
        } else {
            return data.us_states.map((state, index) => {
                if (index === 0) {
                    return(
                        <li key={state.abbreviation}>
                            <a href="#" role="button" onClick={(e) => {this.setState({selected: state.abbreviation, state_name: state.name})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )
                } else {
                    return(
                        <li key={state.abbreviation}>
                            <a href="#" onClick={(e) => {this.setState({selected: state.abbreviation, state_name: state.name})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )                    
                }
            })
        }        
    }    

    /**
     * @function renders component
    */
    render() {  
        const menuStyle = {
            marginTop: '-15px'
        }        
        return (
            <div className="wrapper" style={menuStyle}>
                <nav id="sidebar" className={this.state.active ? 'active' : ''}>
                    <ul className="list-unstyled components">
                        {this.buildMenu()}
                    </ul>                    
                </nav>
                <div id="content">
                    <button type="button" id="sidebarCollapse" className="btn btn-sm btn-secondary navbar-btn" onClick={(e) => {this.setState({active: !this.state.active})}}>
                        <i className="fa fa-bars"></i>
                    </button>
                    <ParkList state_id={this.state.selected} state_name={this.state.state_name} />
                </div>
            </div>
        );
    }
}

export default graphql(getStatesQuery)(Parks);
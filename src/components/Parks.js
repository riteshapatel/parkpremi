import React, { Component } from 'react';
import ParkList from './ParkList';
import '../App.css';
import { graphql } from 'react-apollo';
import { getStatesQuery } from '../queries/queries';

/**
 * Parks component
 */
class Parks extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 'AL',
            state_name: 'Alabama'
        }
    }
    
    buildMenu () {
        let data = this.props.data;
        if (data.loading) {
            return <div>Loading...</div>
        } else {
            return data.us_states.map((state, index) => {
                if (index === 0) {
                    return(
                        <li className="nav-item selected" key={state.abbreviation}>
                            <a className="nav-link active" href="#" role="button" onClick={(e) => {this.setState({selected: state.abbreviation, state_name: state.name})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )
                } else {
                    return(
                        <li className="nav-item" key={state.abbreviation}>
                            <a className="nav-link" href="#" onClick={(e) => {this.setState({selected: state.abbreviation, state_name: state.name})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )                    
                }
            })
        }        
    }    
    /**
     * render method
     */
    render() {  
        const menuStyle = {
            minHeight: '650px',
            marginLeft: '-15px'
        },
        toggleButtonStyle = {
            marginTop: '-9px',
            marginLeft: '-50px'
        }
        return (
            <div className={['container-fluid', 'contentsection', 'text-center', 'lighttext'].join(' ')}>
                    <div className="row text-center">
                        <div className="col" style={menuStyle} id="wrapper">
                            <ul className="nav flex-column sidebar-nav">
                                {this.buildMenu()}
                            </ul>
                        </div>
                        <div className="col col-sm-10">
                            <div className="text-left" style={toggleButtonStyle}>
                                <a href="#menu-toggle" className="btn btn-sm btn-secondary" id="menu-toggle"><i className="fas fa-bars"></i> </a>
                            </div>
                            <ParkList state_id={this.state.selected} state_name={this.state.state_name} />
                        </div>
                    </div>
            </div>
        );
    }
}

export default graphql(getStatesQuery)(Parks);
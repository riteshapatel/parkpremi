import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
const getStatesQuery = gql`
{
    us_states {
        name
        abbreviation
    }
}
`
class LeftMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 'AL'
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
                            <a className="nav-link active" href="#" onClick={(e) => {this.setState({selected: state.abbreviation})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )
                } else {
                    return(
                        <li className="nav-item" key={state.abbreviation}>
                            <a className="nav-link" href="#" onClick={(e) => {this.setState({selected: state.abbreviation})}}><i className="fa fa-tree text-warning"></i> {state.name}</a>
                        </li>
                    )                    
                }
            })
        }        
    }
    render () {     
        const menuStyle = {
            minHeight: '650px'
        }        
        return (
            <div className="col" style={menuStyle}>
                <ul className="nav flex-column sidebar-nav">
                    {this.buildMenu()}
                </ul>
            </div>
        )
    }
}

export default graphql(getStatesQuery)(LeftMenu);
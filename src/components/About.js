/**
 * @author ritesh patel 
 * @description About component
 */
import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    /**
    * @function renders component
    */
    render() {
        /** sets card style */
        const cardstyles = {
            width: '50%'
        }
        /** sets subtitle style */
        const subtitlestyle = {
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#bbb'
        }    
        return (
            <div className="container-fluid contentsection text-center lighttext">
            \\ Preserve Our Parks \\
            <br /><br /><br />
                <div className="row text-center">
                    <div className="col-sm"></div>
                    <div className="col card text-left" style={cardstyles}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-secondary"><i className="fa fa-tree text-success"></i> About ParkPremi</h5>
                            <h6 className="card-subtitle text-center" style={subtitlestyle}>\\ park-pray-me \\</h6>
                            <hr />
                            
                            <p className="card-text">
                                Yes, I adore the immense beauty of US National Parks. I have yet to conqur all of the national parks...alas one day I will. <br /><br />
                                And so what is the best way to see these parks? RoadTrip people! Everyone must do at least one cross country trip across the United States. Well, that is my friendly opinion. 
                                <br /><br />
                                Did I hear a RoadTrip? <i className="fa fa-car text-info"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm"></div>           
                </div>
            </div>
        );
    }
}

export default About;
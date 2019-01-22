import React from 'react';
import uuid from 'uuid';

class Course extends React.Component {
    state= {
        isClicked: false
    };

    show = () => {
        this.state.isClicked ? 
            this.setState({
                isClicked: false
            }) : 
            this.setState({
                isClicked: true
            }) 
    };

    render() {
        return (
            <div className="description-container">
                <div className="description-button-container">
                    <button 
                        className="description-button"
                        onClick={this.show}
                    >
                        {this.state.buttonContent}
                    </button>
                </div>
                {this.state.isClicked ? (
                    <ul>
                        {this.props.courseData.description.map((description)=>(
                            <li key={uuid()}>
                                {description}
                            </li>
                        ))}
                    </ul>) : null}
            </div>
        )
    }
};

export default Course;
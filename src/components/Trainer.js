import React from 'react';

class Trainer extends React.Component {
    state = {
        description: ''
    }

    showDescription = () => (
        this.setState({
            description: this.props.trainer.description
        })
    );

    render() {
        return (
            <div className="trainer-img" 
                 style={{background: `url(${this.props.trainer.image}) center center no-repeat`,
                 backgroundSize: "cover",
                        }}
            >
                <div className="trainer__description"
                     onMouseOver={this.showDescription}
                >
                    <span className="trainer-name">
                        {this.props.trainer.name}
                    </span>
                    <span className="trainer-about">
                        {this.props.trainer.about}
                    </span>
                    {this.state.description && <p className="trainer__description-about">{this.state.description}</p>}
                </div>
            </div>
        )
    }
}
   
export default Trainer;
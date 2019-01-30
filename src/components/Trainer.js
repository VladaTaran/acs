import React from 'react';

class Trainer extends React.Component {
    state = {
        description: '',
        isShow: false,
        class: 'hide',
        style: 'trainer__description'
    };

    showDescription = () => {
        this.setState({
            description: this.props.trainer.description
        });
        if (this.state.class === 'hide') {
            this.setState({
                class: 'show',
                style: 'trainer__description-click'
            })
        } else {
            this.setState({
                class: 'hide',
                style: 'trainer__description'
            })
        }
    }

    render() {
        return (
            <div className="trainer-img" 
                 style = {{background: `url(${this.props.trainer.image}) center center no-repeat`,
                 backgroundSize: "cover",
                        }}
            >
                <div 
                     className = {this.state.style}
                    onClick = {this.showDescription}
                >
                    <span className="trainer-name">
                        {this.props.trainer.name}
                    </span>
                    <span className="trainer-about">
                        {this.props.trainer.about}
                    </span>
                    {this.state.description && 
                        <p className = {this.state.class}>
                            {this.state.description}
                        </p>
                    }
                </div>
            </div>
        )
    }
}
   
export default Trainer;
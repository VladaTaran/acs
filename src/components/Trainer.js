import React from 'react';

class Trainer extends React.Component {
    state = {
        description: '',
        isShow: false,
        class: 'hide',
        style: 'trainer__description'
    }

    // showDescription = () => (
    //     this.setState({
    //         description: this.props.trainer.description
    //     })
    // );
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
        console.log(this.state.isShow)
        // const y = (
        //     <p className="trainer__description-about">{this.state.description}</p>
        // ) 
        // return y;
        // if (this.state.isShow === false) {
        //     this.setState({ isShow: true})
        //     console.log(this.state.isShow );
        //     return  <p className="trainer__description-about">{this.state.description}</p>
        // } else {
        //     this.setState({ description:'', isShow: false})
        // }
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
                // className="trainer__description"
                    onClick = {this.showDescription}
                    //  onMouseOver={this.showDescription}
                >
                    <span className="trainer-name">
                        {this.props.trainer.name}
                    </span>
                    <span className="trainer-about">
                        {this.props.trainer.about}
                    </span>
                    {/* {this.description} */}
                    {this.state.description && 
                        <p 
                            className = {this.state.class}
                        // className="trainer__description-about "
                        >
                            {this.state.description}
                        </p>
                    }
                </div>
            </div>
        )
    }
}
   
export default Trainer;
import React from 'react';
import Fade from 'react-reveal/Fade';

class TextAnimation extends React.Component {
    render() {
        return (
            <div className="courses__background">
                <Fade top>
                    <h1 className="home__background-title">
                        Learn from doing
                    </h1>
                    <p className="home__background-text">
                        Learn something new every day with Aesthetic Consilium School
                    </p>
                </Fade>
            </div>
        )
    }
};

export default TextAnimation;
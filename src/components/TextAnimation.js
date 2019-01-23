import React from 'react';
import Fade from 'react-reveal/Fade';

class TextAnimation extends React.Component {
    render() {
        return (
            <div className="courses__background">
                <Fade top>
                    <div className="courses__background-text">
                        <h1 className="home__background-title">
                            Learn from doing
                        </h1>
                        <p className="home__background-text">
                            Learn something new every day with Aesthetic Consilium School
                        </p>
                    </div>
                </Fade>
            </div>
        )
    }
};

export default TextAnimation;
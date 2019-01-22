import React from 'react';
import BookModal from './BookModal';

class OfferButton extends React.Component {
    state = {
        open: false
   };

    handleBook = () => {
        this.state.open ?
            this.setState({open: false}) : 
            this.setState({open: true})
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <div className="offer-button" onClick={this.handleBook}>
                    Book
                </div>
                <BookModal 
                    className='book-modal'
                    open={this.state.open}
                    handleBook = {this.handleBook}
                    onCloseModal = {this.onCloseModal}
                />
            </div>
        )
    }
};

export default OfferButton;
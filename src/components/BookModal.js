import React from  'react';
import Modal from 'react-responsive-modal';
import ContactsForm from './ContactsForm';
// import ContactsForm from './ContactsFormTwin';

const BookModal = (props) =>  (
    <Modal
        open={props.open}
        closeOnOverlayClick={true}
        onClose = {props.onCloseModal}
    >
    <ContactsForm />
    </Modal>
); 

export default BookModal;
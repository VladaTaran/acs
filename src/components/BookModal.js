import React from  'react';
import Modal from 'react-responsive-modal';
import ContactsForm from './ContactsForm';

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
import React from 'react';
import Footer from './Footer';
import ContactsInfo from './ContactsInfo';
import ContactsForm from './ContactsForm';
// import ContactsForm from './ContactsFormTwin';

const Contact = () => (
    <div>
        <iframe 
            title = 'adress acs'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.281355833858!2d30.525549114894833!3d50.491721092272556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d1fca63da8e5%3A0x2419816ce24704a0!2z0LLRg9C70LjRhtGPINCe0LHQvtC70L7QvdGB0YzQutCwINCd0LDQsdC10YDQtdC20L3QsCwgMSwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1547752322982" 
            style = {{
                     width:"100%",
                     height:"600px",
                     marginTop: 100, 
                     frameborder: "0",
                     border: "0"}} 
            allowFullScreen={true}>
        </iframe>
        <div className="contacts-info">
            <ContactsInfo />
            <ContactsForm />
        </div>
        <Footer />
    </div>
);

export default Contact;
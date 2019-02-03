import React from 'react';
import TextField from '@material-ui/core/TextField';

class ContactsForm extends React.Component {
    state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      isResponse: false
    };
  
    handleChange = (props) => event => {
      this.setState({
        [props]: event.target.value,
      });
    };

    render() {
        return (
            <form 
                className="gform pure-form pure-form-stacked" 
                method="POST" 
                data-email="aesthetic.c.school@gmail.com"
                action="https://script.google.com/macros/s/AKfycbyJvFPvxCiUvZ3JrGIkeAGCQCMqvwQpDqtG-LPy/exec"
            >

                <div className="form-elements">
                  <fieldset className="pure-group">
                    <label htmlFor="name">Name: </label>
                    <input 
                        id="name" 
                        name="name" 
                        placeholder="What your Mom calls you" 
                    />
                  </fieldset>

                  <fieldset className="pure-group">
                    <label htmlFor="message">Message: </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="10"
                        placeholder="Tell us what's on your mind..."
                    />
                  </fieldset>

                  
                    <TextField
                        className="pure-group"
                        name = "email"
                        value = ""
                        type = "email"
                        id = "email"
                    />
                    {/* <label htmlFor="email"><em>Your</em> Email Address:</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value=""
                        // required 
                        placeholder="your.name@email.com"
                    /> */}
                    {/* <span className="email-invalid" style={{display:"none"}}>
                      Must be a valid email address</span> */}

                  <fieldset className="pure-group">
                    <label htmlFor="color">Favourite Color: </label>
                    <input id="color" name="color" placeholder="green" />
                  </fieldset>

                  <button className="button-success pure-button button-xlarge">
                    <i className="fa fa-paper-plane"></i>&nbsp;Send</button>
                </div>

                <div className="thankyou_message"  style={{display:"none"}}>
                     <h2><em>Thanks</em> for contacting us!
                        We will get back to you soon!</h2>
                </div>

            </form>
        )
    }
};

export default ContactsForm;
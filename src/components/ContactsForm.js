import React from 'react';
// import fetch from 'isomorphic-fetch';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';

const styles = theme => ({

  card: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 400,
    width: "100%",
    '@media (max-width: 540px)': {
      display: 'block',
      margin: '20px auto',
      width: '97%',
    },
  },  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '20px 0',
    '@media (max-width: 540px)': {
      paddingLeft: 10,
    }
  },
  textField: {
    maxWidth: 400,
    width: '100%',
    margin: '0 auto',
  },
  button: {
    margin: '20px auto',
    backgroundColor: '#4c5f80',
    color: 'white',
    maxWidth: 400,
  },
});

class ContactsForm extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    valid: true,
    // isResponse: false,
    action: "https://script.google.com/macros/s/AKfycbyJvFPvxCiUvZ3JrGIkeAGCQCMqvwQpDqtG-LPy/exec"
  };

  validateField = (value) => {
    if( value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ) {
      this.setState({valid: true})
    } else {
      this.setState({
        valid: false});
    }
  }

  handleChange = (props) => event => {
    this.setState({
      [props]: event.target.value,
    });
    if(props === 'email' ) {
      let userEmailValue = event.target.value
      this.setState({[props]: userEmailValue}, () => {
        this.validateField(userEmailValue)})
    };

    

    
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let restBody = {
  //     body:JSON.stringify({
  //       text: `Name: ${this.state.message}
  //              Email: ${this.state.email} `,
  //       subject: "NEW CLIENT from aesthetic-school",
  //       from: {
  //         name: "aesthetic-school.com",
  //         "email": "sender@aesthetic-school.com"
  //  },
  //  "to": [
  //     {
  //        "name": "Vlada",
  //        "email": "n.vladyslava@gmail.com"
  //     }]
  //   })
  // };
  //   //TODO export to the service
  //   fetch('https://api.sendpulse.com/smtp/emails', {
  //     method: 'POST',
  //     headers: {
  //       'Access-Control-Allow-Methods': 'POST, OPTIONS',
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(restBody),
  //   })
  //   .then(response => (this.setState(()=>({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       message: '',
  //       isResponse: true
  //     }))
  //   ))
  //   .catch(reason => console.error(reason));
  // }
///// this is correct work with http////
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let restBody = {
  //     body:JSON.stringify({
  //           name: this.state.name,
  //           email: this.state.email,
  //           phone: this.state.phone,
  //           message: this.state.message,
  //         }),
  //     mail:"anak@diceus.com",
  //     senderName:"name"
  //   };
  //   // TODO export to the service
  //   // fetch('http://spring.eu-central-1.elasticbeanstalk.com/send-form-mail', {
  //   fetch(this.state.action, {
  //     method: 'POST',
  //     headers: {
  //       'Access-Control-Allow-Methods': 'POST, OPTIONS',
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //       //'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(restBody),
  //   })
  //   .then(response => (this.setState(()=>({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       message: '',
  //       isResponse: true
  //     }))
  //   ))
  //   .catch(reason => console.error(reason));
  // }
  ///////////
  // handleSubmit = (event) => {
  //     event.preventDefault();
  //     let restBody = {
  //           body:JSON.stringify({
  //                 name: this.state.name,
  //                 email: this.state.email,
  //                 phone: this.state.phone,
  //                 message: this.state.message,
  //               }),
  //           mail:"anak@diceus.com",
  //           senderName:"name"
  //         };
  //     fetch("https://formspree.io/n.vladyslava@gmail.com", {
  //           method: 'POST',
  //           headers: {
  //             'Access-Control-Allow-Origin': 'https://formspree.io/n.vladyslava@gmail.com',
  //             'Access-Control-Allow-Methods': 'POST, OPTIONS',
  //             // 'Accept': 'application/json',
  //             'Content-Type': 'text/html; charset=utf-8',
  //             'Access-Control-Allow-Headers': "Version, Authorization, Content-Type"
  //           },
  //           body: JSON.stringify(restBody),
  //         })
  //         .then(response => (this.setState(()=>({
  //             name: '',
  //             email: '',
  //             phone: '',
  //             message: '',
  //             isResponse: true
  //           }))
  //         ))
  //         .catch(reason => console.error(reason));
  // }

  render() {
    const { classes } = this.props;

    return (
     
      <Card className={classes.card} > 
          <form 
            className={classes.container}
            method = "post"
            action="https://formspree.io/aesthetic.c.school@gmail.com"
          >

          <TextField 
            name="name" 
            type="text" 
            value= {this.state.name}
            label="Name"
            className={classes.textField}
            onChange={this.handleChange('name')} 
          />
          <TextField 
            name="email" 
            type="email" 
            value= {this.state.email}
            label="Email"
            className={classes.textField}
            required
            onChange={this.handleChange('email')} 
          />
          {!this.state.valid && <div style={{color: "red"}}>Please enter correct email</div>}
          <TextField 
            name="phone" 
            value={this.state.phone}
            label="Phone number"
            className={classes.textField}
            required
            onChange={this.handleChange('phone')} 
          />
          <TextField 
            multiline={true}
            rows={4}
            rowsMax={8}
            name = "message"
            id="standard-uncontrolled"
            label="Type your message"
            value={this.state.message}
            className={classes.textField}
            onChange={this.handleChange('message')}
            margin="normal" 
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            className={classes.button}
          > 
            Send
          </Button>
          {/* <input name="email" type="email" value="" /> */}
          {/* <button type="submit">Submit</button> */}
          </form>
      </Card>
        //  <ValidatorForm
      //     method = "post"
      //     action="https://formspree.io/n.vladyslava@gmail.com"
      //     // action = {this.state.action}
      //     // action = "https://script.google.com/macros/s/AKfycbyJvFPvxCiUvZ3JrGIkeAGCQCMqvwQpDqtG-LPy/exec"
      //     className={classes.container}
      //     ref="form"
      //     // onSubmit={this.handleSubmit}
      //     onError={errors => console.log(errors)}
      //   > */}
      //    {this.state.isResponse && <div style={{color: "#303f9f"}}>Successfully sent!</div>} */}
      //     <TextValidator
      //       label="Name"
      //       className={classes.textField}
      //       onChange={this.handleChange('name')}
      //       name="name"
      //       type="text"
      //       value={this.state.name}
      //     />
      //     <TextValidator
      //       label="Email"
      //       className={classes.textField}
      //       onChange={this.handleChange('email')}
      //       name="email"
      //       value={this.state.email}
      //       validators={['required', 'isEmail']}
      //       errorMessages={['this field is required', 'email is not valid']}
      //     />
      //     <TextValidator
      //       label="Phone number"
      //       className={classes.textField}
      //       onChange={this.handleChange('phone')}
      //       name="phone"
      //       value={this.state.phone}
      //       validators={['required', 'matchRegexp:1?\s*\W?\s*([2-9][0-8][0-9])\s*\W?\s*([2-9][0-9]{2})\s*\W?\s*([0-9]{4})(\se?x?t?(\d*))?']}
      //       errorMessages={['this field is required', 'phone is not valid']}
      //     />
      //     <TextField
      //       multiline={true}
      //       rows={4}
      //       rowsMax={8}
      //       name = "message"
      //       id="standard-uncontrolled"
      //       label="Type your message"
      //       value={this.state.message}
      //       className={classes.textField}
      //       onChange={this.handleChange('message')}
      //       margin="normal"
      //     />
      //     <Button 
      //       variant="contained" 
      //       color="primary" 
      //       type="submit"
      //       className={classes.button}
      //       // onSubmit={this.handleSubmit}
      //     >
      //        Send
      //     </Button> */}
          
      //   </ValidatorForm> 
      
    );
  }
}

ContactsForm.dafaultProps = {
  classes: null,
};

export default withStyles(styles)(ContactsForm);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';

    const styles = theme => ({
    overrides: {
        MuiInput: {
          underline: {
            '&:before': { //underline color when textfield is inactive
              backgroundColor: 'red',
            },
            '&:hover:not($disabled):before': { //underline color when hovered 
              backgroundColor: 'green',
            },
          }
        }
      },

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
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  underlineStyle: {
    color: '#4c5f80',
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
   
  };

  handleChange = (props) => event => {
    this.setState({
      [props]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newUser = [this.state];
    fetch('/send-form-mail', {
      method: 'POST',
      body: JSON.stringify(newUser),
    });
    this.setState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} > 

        <ValidatorForm
          method = "post"
          className={classes.container}
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            label="Name"
            className={classes.textField}
            onChange={this.handleChange('name')}
            name="name"
            value={this.state.name}
          />
          <TextValidator
            label="Email"
            className={classes.textField}
            onChange={this.handleChange('email')}
            name="email"
            value={this.state.email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <TextValidator
            label="Phone number"
            className={classes.textField}
            onChange={this.handleChange('phone')}
            name="phone"
            value={this.state.phone}
            validators={['required', 'matchRegexp:1?\s*\W?\s*([2-9][0-8][0-9])\s*\W?\s*([2-9][0-9]{2})\s*\W?\s*([0-9]{4})(\se?x?t?(\d*))?']}
            errorMessages={['this field is required', 'phone is not valid']}
          />
          <TextField
            multiline={true}
            rows={4}
            rowsMax={8}
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
            onSubmit={this.handleSubmit}
          >
             Send
          </Button>
        </ValidatorForm>
      </Card>
    );
  }
}

ContactsForm.dafaultProps = {
  classes: null,
};

export default withStyles(styles)(ContactsForm);
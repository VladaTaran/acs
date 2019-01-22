import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import StayCurrentPortrait from '@material-ui/icons/StayCurrentPortrait';
import Mail from '@material-ui/icons/Mail';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',  
    alignItems:'center',
    minWidth: 275,
    marginRight: "20px",
    width: "50%",
    '@media (max-width: 540px)': {
      display: 'block',
      width: '97%',
      margin: '20px auto',
    },
  },
  cardContent:{
    textAlign: 'center',
  },
  contactsBox: {
    display: 'inline-block',
    margin: '0 auto',
  },
  contactsItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  },
  icon: {
    fontSize: '36px',
    marginRight: '20px',
    color: '#4c5f80',
  },
  pos: {
    marginBottom: 12,
  },
};

function ContactsInfo(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent} >
        <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
        >
          Contacts
        </Typography>
        <div className={classes.contactsBox}>
            <div className={classes.contactsItem}>
                <LocationOn className={classes.icon}/>
                <Typography component="p">
                    04211, Ukraine, Kyiv, Obolonska nab. 1, 2
                </Typography>
            </div>
            <div className={classes.contactsItem}>
                <StayCurrentPortrait className={classes.icon}/>
                <Typography component="p">
                    +380111 111 11 11
                    <br />
                    +380111 111 11 11
                </Typography>
            </div>
            <div className={classes.contactsItem}>
                <Mail className={classes.icon}/>
                <Typography component="p">
                    aesthetic-consilium@mail.com
                </Typography>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

ContactsInfo.defaultProps = {
  classes: null,
};

export default withStyles(styles)(ContactsInfo);
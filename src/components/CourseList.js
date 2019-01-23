import React from 'react';
import PropTypes from 'prop-types';
import descriptionData from '../description-data.json';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#4c5f80',
  },
  list: {
    fontSize: theme.typography.pxToRem(16),
  }
});

function CourseList (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        {descriptionData.map(course => {
            return (
                <ExpansionPanel key={uuid()}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{course.course}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List key={uuid()}>
                            {course.description.map(descriptionItem => (
                                <ListItem 
                                    className={classes.list}
                                    key={uuid()}
                                    >
                                        {descriptionItem}
                                </ListItem>
                            ))}
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })}
    </div>
  );
}

CourseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseList);
import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import CustomerFormDetailed from "./CustomerFormDetailed";
import AddressDetailed from "./AddressDetailed";
import ContactPreference from "./ContactPreference";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  expansionPanel: {
    width: "100%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const titles = [
  {
    value: "Miss",
    label: "Miss"
  },
  {
    value: "Madam",
    label: "Madam"
  },
  {
    value: "Ms",
    label: "Ms"
  },
  {
    value: "Mister",
    label: "Mister"
  },
  {
    value: "Doctor",
    label: "Doctor"
  }
];

class CustomerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      Title: "Ms",
      expanded: null
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          className={classes.root}
        >
          <Grid item xs={3}>
            <TextField
              id="standard-select-currency-native"
              select
              required
              label="Title"
              className={classes.textField}
              value={this.state.title}
              onChange={this.handleChange("title")}
              SelectProps={{
                native: true
              }}
              fullWidth
              margin="normal"
            >
              {titles.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={9} />
          <Grid item xs={5}>
            <TextField
              required
              id="standard-required"
              label="First Name"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange("firstName")}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <TextField
              required
              id="standard-required"
              label="Last Name"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={11}>
            <TextField
              required
              id="standard-required"
              label="Email Address"
              placeholder="Email Address"
              value={this.state.emailAddress}
              onChange={this.handleChange("emailAddress")}
              className={classes.textField}
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <div className={classes.expansionPanel}>
              <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={this.handleChangePanel("panel1")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>User Info</Typography>
                  <Typography className={classes.secondaryHeading}>
                    (Optional)
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <CustomerFormDetailed />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "panel2"}
                onChange={this.handleChangePanel("panel2")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Address Info
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    (Optional)
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <AddressDetailed />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "panel3"}
                onChange={this.handleChangePanel("panel3")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Contact Preference
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    (Optional)
                  </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <ContactPreference />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.button}>
              <SaveIcon
                className={classnames(classes.leftIcon, classes.iconSmall)}
              />
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

CustomerForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerForm);

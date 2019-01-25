import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";

import LabelIcon from "@material-ui/icons/Label";
const styles = theme => ({
  root: {
    flexGrow: 1
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

const times = [
  {
    value: 0,
    label: "10 AM - 2PM"
  },
  {
    value: 1,
    label: "2 PM - 6 PM"
  },
  {
    value: 2,
    label: "6 PM - 10 PM"
  },
  {
    value: 3,
    label: "11 PM"
  }
];
class CustomerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      callingTime1: 0,
      callingTime2: 0,
      phone: false,
      mail: false,
      email: false,
      sms: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleChangeCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        alignItems="center"
        justify="flex-start"
        className={classes.root}
      >
        <Grid item xs={11}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.phone}
                  onChange={this.handleChangeCheckbox("phone")}
                  value="phone"
                  color="primary"
                />
              }
              label="Phone"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.sms}
                  onChange={this.handleChangeCheckbox("sms")}
                  value="sms"
                  color="primary"
                />
              }
              label="Sms"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.email}
                  onChange={this.handleChangeCheckbox("email")}
                  value="email"
                  color="primary"
                />
              }
              label="Email"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={this.state.mail}
                  onChange={this.handleChangeCheckbox("mail")}
                  value="mail"
                  color="primary"
                />
              }
              label="Mail"
            />
          </FormGroup>
        </Grid>
        { this.state.phone && 
         <Grid
         container>
        <Grid item xs={11} sm={5}>
          <TextField
            select
            label="Calling Time 1"
            placeholder="Calling Time 1"
            value={this.state.callingTime1}
            onChange={this.handleChange("callingTime1")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneCallbackIcon />
                </InputAdornment>
              )
            }}
            SelectProps={{
              native: true
            }}
          >
            {times.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={false} sm={1} />
        <Grid item xs={11} sm={5}>
          <TextField
            select
            label="Calling Time 2"
            placeholder="Calling Time 2"
            value={this.state.callingTime2}
            onChange={this.handleChange("callingTime2")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneCallbackIcon />
                </InputAdornment>
              )
            }}
            SelectProps={{
              native: true
            }}
          >
            {times.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        </Grid>
      }
        </Grid>
    );
  }
}

CustomerForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerForm);

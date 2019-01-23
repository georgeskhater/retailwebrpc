import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from "@material-ui/icons/Phone";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LanguageIcon from "@material-ui/icons/Language";
import FlagIcon from "@material-ui/icons/Flag";

import MaskedInput from "react-text-mask";

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
const countries = [
  {
    value: "En",
    label: "USA"
  },
  {
    value: "Fr",
    label: "France"
  },
  {
    value: "Es",
    label: "Spain"
  },
  {
    value: "it",
    label: "Italy"
  }
];
class AddressDetailed extends Component {
  constructor(props) {
    super();
    this.state = {
      country: "",
      city: "",
      zipCode: "",
      address1: "",
      address2: "",
      address3: ""
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
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
        <Grid item xs={3}>
          <TextField
            select
            label="Country"
            placeholder="Country"
            value={this.state.country}
            onChange={this.handleChange("country")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlagIcon />
                </InputAdornment>
              )
            }}
            SelectProps={{
              native: true
            }}
          >
            {countries.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <TextField
            label="City"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange("city")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <TextField
            label="Zip Code"
            placeholder="Zip Code"
            value={this.state.zipCode}
            onChange={this.handleChange("zipCode")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            label="Address"
            placeholder="Address Ligne 1"
            value={this.state.address1}
            onChange={this.handleChange("address1")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MyLocationIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            label="Address Ligne 2"
            placeholder="Address Ligne 2"
            value={this.state.address2}
            onChange={this.handleChange("address2")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={11}>
          <TextField
            label="Address Ligne 3"
            placeholder="Address Ligne 3"
            value={this.state.address3}
            onChange={this.handleChange("address3")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}

AddressDetailed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressDetailed);

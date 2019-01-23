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
import LabelIcon from "@material-ui/icons/Label";
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

const languages = [
  {
    value: "En",
    label: "English"
  },
  {
    value: "Fr",
    label: "French"
  },
  {
    value: "Es",
    label: "Spanish"
  },
  {
    value: "Ar",
    label: "Arabic"
  }
];

const genders = [
  {
    value: 0,
    label: "Other"
  },
  {
    value: 1,
    label: "Male"
  },
  {
    value: 2,
    label: "Female"
  }
];
function DOBCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-2]/, /\d/, /\d/, /\d/, "/", /[0-1]/, /\d/, "/", /[0-3]/, /\d/]}
      placeholder="YYYY/MM/DD"
    />
  );
}

class CustomerFormDetailed extends Component {
  constructor(props) {
    super();
    this.state = {
      middleName: "",
      secondLastName: "",
      phoneNumber: "",
      dob: "",
      language: "En",
      gender: 0
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
        <Grid item xs={5}>
          <TextField
            label="Middle Name"
            placeholder="Middle Name"
            value={this.state.middleName}
            onChange={this.handleChange("middleName")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <TextField
            label="Second Last Name"
            placeholder="Second Last Name"
            value={this.state.secondLastName}
            onChange={this.handleChange("secondLastName")}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item xs={5}>
          <TextField
            label="Phone Number"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={this.handleChange("phoneNumber")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <TextField
            label="Date Of Birth"
            placeholder="Date Of Birth"
            value={this.state.dob}
            onChange={this.handleChange("dob")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
              inputComponent: DOBCustom
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            select
            label="Language"
            placeholder="Language"
            value={this.state.language}
            onChange={this.handleChange("language")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              )
            }}
            SelectProps={{
              native: true
            }}
          >
            {languages.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <TextField
            select
            label="Gender"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.handleChange("gender")}
            className={classes.textField}
            margin="normal"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LabelIcon />
                </InputAdornment>
              )
            }}
            SelectProps={{
              native: true
            }}
          >
            {genders.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
    );
  }
}
CustomerFormDetailed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerFormDetailed);

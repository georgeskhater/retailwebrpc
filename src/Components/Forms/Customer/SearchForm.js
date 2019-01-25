import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";
import CustomerFormDetailed from "./CustomerFormDetailed";
import FlagIcon from "@material-ui/icons/Flag";
import InputAdornment from "@material-ui/core/InputAdornment";
import ResultFrom from "./ResultFrom";
import SearchFormDetailed from "./SearchFormDetailed";
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

class CustomerForm extends Component {
  constructor(props) {
    super();
    this.state = {
      FirstName: "",
      LastName: ""
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
          <Grid item xs={11} sm={3}>
            <TextField
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
          <Grid item xs={false} sm={1} />
          <Grid item xs={11} sm={3}>
            <TextField
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
          <Grid item xs={false} sm={1} />
          <Grid item xs={11} sm={3}>
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

          <Grid item xs={11}>
            <div className={classes.expansionPanel}>
              <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={this.handleChangePanel("panel1")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <SearchFormDetailed />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.button}>
              <SearchIcon
                className={classnames(classes.leftIcon, classes.iconSmall)}
              />
              Search
            </Button>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </form>
    );
  }
}

CustomerForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerForm);

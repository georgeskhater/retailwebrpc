import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormCard from "../../Components/FormCard";
import ProfileCard from "../../Components/ProfileCard";
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class SelectCustomer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            spacing={24}
            style={{ marginBottom: 0, marginTop: 0 }}
            alignItems="flex-start"
            direction="row"
            justify="center"
          >
            <Grid item xs={4}>
              <FormCard type="search" />
            </Grid>
            <Grid item xs={6}>
              <FormCard type="result" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SelectCustomer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SelectCustomer);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormCard from "../../Components/FormCard";
import ProfileCard from "../../Components/ProfileCard";
import strings from "../../Translations/i18n";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: "100%"
  }
});

class AddCustomer extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    let lang = this.props.match.params.lang;
    strings.setLanguage(lang);
    this.setState({});
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
            <Grid item xs={12} sm={8} md={6}>
              <FormCard type="create" />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <ProfileCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AddCustomer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddCustomer);

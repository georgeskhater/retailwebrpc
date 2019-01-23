import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import red from "@material-ui/core/colors/red";
import CustomerForm from "./Forms/Customer/CustomerForm";

const styles = theme => ({
  buttonCenter: {
    marginTop: "10%"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  header: {
    backgroundColor: "#000"
  },
  title: {
    color: "#fff"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class FormCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          classes={{
            title: classes.title
          }}
          title="Create Customer"
        />
        <CardContent>
          <CustomerForm />
        </CardContent>
      </Card>
    );
  }
}

FormCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormCard);

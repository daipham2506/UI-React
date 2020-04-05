import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Checkbox from "material-ui/Checkbox";
import FormControlLabel from "material-ui/Form/FormControlLabel";

// material-ui-icons
import Timeline from "material-ui-icons/Timeline";
import Code from "material-ui-icons/Code";
import Group from "material-ui-icons/Group";
import Check from "material-ui-icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import registerPageStyle from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      name: "",
      nameState: "",
      email: "",
      emailState: "",
      password: "",
      passwordState: "",
      password2: "",
      password2State: "",
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that returns true if value at least 6 characters, including lowercase, UPPERCASE and number, false otherwise
  verifyPassword(value) {
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
    if (regex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "password":
        if (this.verifyPassword(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "c-password":
        if (event.target.value === this.state.password) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (this.state.passwordState === "success" && this.state.emailState === "success" 
        && this.state.nameState === "success" && this.state.password2 === "success") {
      return true;
    } else {
      if (this.state.passwordState !== "success") {
        this.setState({ passwordState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
      if (this.state.nameState !== "success") {
        this.setState({ nameState: "error" });
      }
      if (this.state.password2State !== "success") {
        this.setState({ password2State: "error" });
      }
    }
    return false;
  }
  submit(e) {
    e.preventDefault();
    if (this.isValidated()) {

    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Register"
              titleAlign="center"
              customCardTitleClasses={classes.cardTitle}
              customCardClasses={classes.cardClasses}
              content={
                <GridContainer justify="center">
                  <ItemGrid xs={12} sm={12} md={5}>
                    <InfoArea
                      title="Marketing"
                      description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                      icon={Timeline}
                      iconColor="rose"
                    />
                    <InfoArea
                      title="Fully Coded in HTML5"
                      description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                      icon={Code}
                      iconColor="primary"
                    />
                    <InfoArea
                      title="Built Audience"
                      description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                      icon={Group}
                      iconColor="info"
                    />
                  </ItemGrid>
                  <ItemGrid xs={12} sm={8} md={6}>
                    <div className={classes.center}>
                      <IconButton color="twitter">
                        <i className="fab fa-twitter" />
                      </IconButton>
                      {` `}
                      <IconButton color="dribbble">
                        <i className="fab fa-dribbble" />
                      </IconButton>
                      {` `}
                      <IconButton color="facebook">
                        <i className="fab fa-facebook-f" />
                      </IconButton>
                      {` `}
                      <h4 className={classes.socialTitle}>or be classical</h4>
                    </div>
                    <form onSubmit={e => this.submit(e)}>
                      <CustomInput
                        success={this.state.nameState === "success"}
                        error={this.state.nameState === "error"}
                        labelText="Full Name *"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "name", "length", 3)
                        }}
                      />
                      <CustomInput
                        success={this.state.emailState === "success"}
                        error={this.state.emailState === "error"}
                        labelText="Email Address *"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "email", "email"),
                          type: "email",
                          // startAdornment: (
                          //   <InputAdornment
                          //     position="start"
                          //     className={classes.inputAdornment}
                          //   >
                          //     <Email className={classes.inputAdornmentIcon} />
                          //   </InputAdornment>
                          // ),
                          // placeholder: "Email..."
                        }}
                      />
                      <CustomInput
                        success={this.state.passwordState === "success"}
                        error={this.state.passwordState === "error"}
                        labelText="Password *"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          onChange: event => this.change(event, "password", "password"),
                          // startAdornment: (
                          //   <InputAdornment
                          //     position="start"
                          //     className={classes.inputAdornment}
                          //   >
                          //     <LockOutline
                          //       className={classes.inputAdornmentIcon}
                          //     />
                          //   </InputAdornment>
                          // ),
                          // placeholder: "Password..."
                        }}
                      />
                      <small> Password must at least 6 characters. Including lowercase, UPPERCASE and number. </small>
                      <CustomInput
                        success={this.state.password2State === "success"}
                        error={this.state.password2State === "error"}
                        labelText="Confirm Password *"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          onChange: event => this.change(event, "password2", "c-password"),
                        }}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(1)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked
                            }}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#a">terms and conditions</a>.
                          </span>
                        }
                      />
                      <div className={classes.center}>
                        <Button round color="primary" type="submit">
                          Get started
                        </Button>
                      </div>
                    </form>
                  </ItemGrid>
                </GridContainer>
              }
            />
          </ItemGrid>
        </GridContainer>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registerPageStyle)(RegisterPage);

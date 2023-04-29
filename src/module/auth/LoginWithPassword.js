import React, { Component } from "react";

import { connect } from "react-redux";
import { NativeDomNavigate } from "@wrappid/styled-components";

import {
  CoreBox,
  CoreAvatar,
  CoreH6,
  CoreTypographyBody2,
  CoreTypographyBody1,
  CoreTextButton,
  CoreForm,
  CoreLink,
  CoreTypographyButton,
  maskEmailOrPhone,
  clearAuthState,
  saveAuthData,
  saveData,
} from "@wrappid/core";
import { CoreClasses } from "@wrappid/styles";
import { AuthContainer } from "./AuthContainer";

class LoginWithPassword extends Component {
  state = { reset: false };

  componentDidMount = () => {};

  componentDidUpdate = () => {};

  GoBack = () => {
    this.props.SaveAuthData({
      authNextPage: "checkUserExist",
      checkLoginOrRegisterError: false,
      checkLoginOrRegisterLoading: false,
      checkLoginOrRegisterMsg: false,
      checkLoginOrRegisterSuccess: false,
      navigateToOtpSuccess: false,
      navigateToResetPasswordSuccess: false,
    });
    this.props.ClearAuthState();
  };

  render() {
    // console.log("props : ", this.props);
    // console.log("state : ", this.state);
    const {
      navigateToResetPasswordSuccess,
      navigateToOtpSuccess,
      checkLoginOrRegisterSuccess,
      authNextPage,
    } = this.props;

    if (
      (navigateToResetPasswordSuccess ||
        navigateToOtpSuccess ||
        !checkLoginOrRegisterSuccess) &&
      authNextPage !== "loginWithPassword"
    ) {
      return <NativeDomNavigate to={"/" + authNextPage} />;
    }

    return (
      <AuthContainer>
        <CoreBox
          styleClasses={[
            CoreClasses.LAYOUT.HORIZONTAL_CENTER,
            CoreClasses.MARGIN.MB3,
          ]}
        >
          <CoreAvatar
            styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
            src={this.props.photo ? this.props.photo : "photo.jpg"}
          />
        </CoreBox>

        <CoreH6
          styleClasses={[
            CoreClasses.DATA_DISPLAY.TEXT_CENTER,
            CoreClasses.MARGIN.MB1,
          ]}
        >
          {this.props.name}
        </CoreH6>

        <CoreTypographyBody2
          limitChars={42}
          hideSeeMore={true}
          styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}
        >
          {maskEmailOrPhone(
            this.props.navData?.emailOrPhone
              ? this.props.navData?.emailOrPhone
              : ""
          )}
        </CoreTypographyBody2>

        <CoreBox
          styleClasses={[
            CoreClasses.LAYOUT.HORIZONTAL_CENTER,
            CoreClasses.MARGIN.MB1,
          ]}
        >
          <CoreTextButton OnClick={this.GoBack} label="Not you" />
        </CoreBox>

        <CoreForm
          styleClasses={CoreClasses.LAYOUT.AUTH_FORM_CONTAINER}
          formId={"loginWithPassword"}
          mode={"edit"}
          authenticated={false}
        />

        <CoreBox
          styleClasses={[
            CoreClasses.LAYOUT.FULL_WIDTH,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.MARGIN.MT3,
          ]}
        >
          {/**
           * @TODO:
           * we need send otp to the provided email or phone
           * fix required: email or phone getting removed from store auth.navData
           */}
          <CoreLink href="/resetPassword">
            <CoreTypographyButton>Reset Password</CoreTypographyButton>
          </CoreLink>

          <CoreTypographyBody1 component="span">or</CoreTypographyBody1>

          <CoreLink href="/enterOtp">
            <CoreTypographyButton>Login with OTP</CoreTypographyButton>
          </CoreLink>
        </CoreBox>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
    authNextPage: state.auth.authNextPage,
    checkLoginOrRegisterSuccess: state.auth.checkLoginOrRegisterSuccess,
    curPage: state.auth.curPage,
    name: state.auth.name,
    navData: state.auth.navData,
    navigateToOtpSuccess: state.auth.navigateToOtpSuccess,
    navigateToResetPasswordSuccess: state.auth.navigateToResetPasswordSuccess,
    photo: state.auth.photo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ClearAuthState: (data) => {
      dispatch(clearAuthState(data));
    },
    SaveAuthData: (data) => {
      dispatch(saveAuthData(data));
    },
    SaveData: (data) => {
      dispatch(saveData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithPassword);

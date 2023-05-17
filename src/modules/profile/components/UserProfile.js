import React, { Component } from "react";

import { connect } from "react-redux";

import {
    CoreGrid,
    CoreCard,
    CoreCardContent,
    CoreDivider,
    CoreForm,
    FORM_EDIT_MODE,
    FORM_IDS,
    FORM_VIEW_MODE,
} from '@wrappid/core'
// import RssFeed from "../utility/RssFeed";

class UserProfile extends Component {
    state = {
        [FORM_IDS.__PROFILE_BASIC]       : FORM_VIEW_MODE,
        [FORM_IDS.__PROFILE_CONTACT]     : FORM_VIEW_MODE,
        [FORM_IDS.__PROFILE_CLINIC]      : FORM_VIEW_MODE,
        [FORM_IDS.__PROFILE_REGISTRATION]: FORM_VIEW_MODE,
        [FORM_IDS.__PROFILE_EDUCATION]   : FORM_VIEW_MODE,
        [FORM_IDS.__PROFILE_EXPERIENCE]  : FORM_VIEW_MODE,
    };

    componentDidMount = () => {};

    ToggleMode = (formId) => {
        this.setState({ [formId]: this.state[formId] === FORM_VIEW_MODE ? FORM_EDIT_MODE : FORM_VIEW_MODE });
    };

    render() {
        // eslint-disable-next-line no-console
        console.log("Profile props", this.props);
        return (
            <CoreGrid>
                <CoreCard gridProps={{ gridSize: { sm: 8 } }}>
                    <CoreCardContent>
                        <CoreGrid coreId="userProfileGrid">
                            <CoreForm
                                coreId="basicInfo"
                                allowDelete={false}
                                formId={FORM_IDS.__PROFILE_BASIC}
                                mode={this.state[FORM_IDS.__PROFILE_BASIC]}
                                query={{
                                    _defaultFilter: encodeURIComponent(
                                        JSON.stringify({ userId: this.props.auth?.uid })
                                    ),
                                }}
                            />

                            <CoreDivider />

                            <CoreForm
                                coreId="contactInfo"
                                allowDelete={false}
                                allowEdit={false}
                                formId={FORM_IDS.__PROFILE_CONTACT}
                                notEditable={true}
                            />

                            <CoreDivider />

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() === "doctor" && (
                                <CoreForm
                                    coreId="registrationInfo"
                                    formId={FORM_IDS.__PROFILE_REGISTRATION}
                                    allowDelete={false}
                                    gridProps={{
                                        gridSize: {
                                            sm: 6,
                                            xs: 12,
                                        },
                                    }}
                                    mode={this.state[FORM_IDS.__PROFILE_REGISTRATION]}
                                />
                            )}

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() === "doctor" && (
                                <CoreForm
                                    arrayView={true}
                                    coreId="clinicInfo"
                                    formId={FORM_IDS.__PROFILE_CLINIC}
                                    gridProps={{
                                        gridSize: {
                                            sm: 6,
                                            xs: 12,
                                        },
                                    }}
                                    mode={this.state[FORM_IDS.__PROFILE_CLINIC]}
                                    arrayDataLimit={2}
                                    query={{
                                        _defaultFilter: encodeURIComponent(
                                            JSON.stringify({ personId: this.props?.basic?.id })
                                        ),
                                    }}
                                />
                            )}

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() === "doctor" && <CoreDivider />}

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() !== "patient" && (
                                <CoreForm
                                    arrayView={true}
                                    coreId="educationInfo"
                                    formId={FORM_IDS.__PROFILE_EDUCATION}
                                    gridProps={{
                                        gridSize: {
                                            sm: 6,
                                            xs: 12,
                                        },
                                    }}
                                    mode={this.state[FORM_IDS.__PROFILE_EDUCATION]}
                                    arrayDataLimit={2}
                                    query={{
                                        _defaultFilter: encodeURIComponent(
                                            JSON.stringify({ personId: this.props?.basic?.id })
                                        ),
                                    }}
                                />
                            )}

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() !== "patient" && (
                                <CoreForm
                                    arrayView={true}
                                    coreId="experienceInfo"
                                    formId={FORM_IDS.__PROFILE_EXPERIENCE}
                                    gridProps={{
                                        gridSize: {
                                            sm: 6,
                                            xs: 12,
                                        },
                                    }}
                                    mode={this.state[FORM_IDS.__PROFILE_EXPERIENCE]}
                                    arrayDataLimit={2}
                                    query={{
                                        _defaultFilter: encodeURIComponent(
                                            JSON.stringify({ personId: this.props?.basic?.id })
                                        ),
                                    }}
                                    // afterCreateError={() => {
                                    //   alert("CREATE error hook");
                                    // }}
                                    // afterEditError={() => {
                                    //   alert("EDIT error hook");
                                    // }}
                                    // afterDeleteError={() => {
                                    //   alert("DELETE error hook");
                                    // }}
                                    // afterCreateSuccess={() => {
                                    //   alert("CREATE success hook");
                                    // }}
                                    // afterEditSuccess={() => {
                                    //   alert("EDIT success hook");
                                    // }}
                                    // afterDeleteSuccess={() => {
                                    //   alert("DELETE success hook");
                                    // }}
                                />
                            )}

                            {this.props.auth?.role?.role &&
                this.props.auth?.role?.role.toLowerCase() === "patient" && (
                                <CoreForm
                                    arrayView={true}
                                    formId={FORM_IDS.__CREATE_PATIENT}
                                    gridProps={{
                                        gridSize: {
                                            sm: 6,
                                            xs: 12,
                                        },
                                    }}
                                    mode={FORM_VIEW_MODE}
                                />
                            )}
                        </CoreGrid>
                    </CoreCardContent>
                </CoreCard>

                <CoreCard gridProps={{ gridSize: { sm: 4 } }}>
                    <CoreCardContent>
                        {/* <RssFeed /> */}
                    </CoreCardContent>
                </CoreCard>
            </CoreGrid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addresses             : state.profile.addresses,
        auth                  : state.auth,
        basic                 : state.profile.basic,
        contact               : state.profile.contact,
        educations            : state.profile.educations,
        experiences           : state.profile.experiences,
        navData                 : state.auth.navData,
        registration            : state.profile.registration,
        departments: []
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

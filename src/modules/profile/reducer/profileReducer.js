import {
    PROFILE_COMPLETENESS_CHECKLIST_ERROR,
    PROFILE_COMPLETENESS_CHECKLIST_SUCCESS,
    PROFILE_COMPLETENESS_ERROR,
    PROFILE_COMPLETENESS_RELOAD,
    PROFILE_COMPLETENESS_REPORT_UPDATE,
    PROFILE_COMPLETENESS_SUCCESS,
    GET_PROFILE_ADDRESS_ERROR,
    GET_PROFILE_ADDRESS_LOADING,
    GET_PROFILE_ADDRESS_SUCCESS,
    GET_PROFILE_BASIC_ERROR,
    GET_PROFILE_BASIC_LOADING,
    GET_PROFILE_BASIC_SUCCESS,
    GET_PROFILE_CONTACT_ERROR,
    GET_PROFILE_CONTACT_LOADING,
    GET_PROFILE_CONTACT_SUCCESS,
    GET_PROFILE_EDUCATION_ERROR,
    GET_PROFILE_EDUCATION_LOADING,
    GET_PROFILE_EDUCATION_SUCCESS,
    GET_PROFILE_EXPERIENCE_ERROR,
    GET_PROFILE_EXPERIENCE_LOADING,
    GET_PROFILE_EXPERIENCE_SUCCESS,
    GET_PROFILE_REGISTRATION_ERROR,
    GET_PROFILE_REGISTRATION_LOADING,
    GET_PROFILE_REGISTRATION_SUCCESS,
} from "./../types/profileTypes";

import {
    LOGOUT_SUCCESS
} from "@wrappid/core";

const initState = {
    addresses: null,

    addressesError  : false,
    addressesLoading: false,
    addressesSuccess: false,
    basic           : null,

    basicError  : false,
    basicLoading: false,
    basicSuccess: false,
    completeness: {
        checklist: {},
        data     : {},
        error    : false,
        reload   : false,
        report   : {
            missingData : {},
            providedData: {},
            quotient    : 0,
        },
        success: false,
    },

    contact       : false,
    contactError  : false,
    contactLoading: false,
    contactSuccess: false,

    educations       : null,
    educationsError  : false,
    educationsLoading: false,
    educationsSuccess: false,

    experiences       : null,
    experiencesError  : false,
    experiencesLoading: false,
    experiencesSuccess: false,

    registration       : null,
    registrationError  : false,
    registrationLoading: false,
    registrationSuccess: false,
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE_BASIC_LOADING:
            return {
                ...state,
                basic       : null,
                basicError  : false,
                basicLoading: true,
                basicSuccess: false,
            };

        case GET_PROFILE_BASIC_SUCCESS:
            return {
                ...state,
                basic       : action.payload?.data?.data,
                basicError  : false,
                basicLoading: false,
                basicSuccess: true,
            };

        case GET_PROFILE_BASIC_ERROR:
            return {
                ...state,
                basic       : null,
                basicError  : true,
                basicLoading: false,
                basicSuccess: false,
            };

        case GET_PROFILE_REGISTRATION_LOADING:
            return {
                ...state,
                registration       : null,
                registrationError  : false,
                registrationLoading: true,
                registrationSuccess: false,
            };

        case GET_PROFILE_REGISTRATION_SUCCESS:
            return {
                ...state,
                registration       : action.payload.data,
                registrationError  : false,
                registrationLoading: false,
                registrationSuccess: true,
            };

        case GET_PROFILE_REGISTRATION_ERROR:
            return {
                ...state,
                registration       : null,
                registrationError  : true,
                registrationLoading: false,
                registrationSuccess: false,
            };

        case GET_PROFILE_ADDRESS_LOADING:
            return {
                ...state,
                addresses       : null,
                addressesError  : false,
                addressesLoading: true,
                addressesSuccess: false,
            };

        case GET_PROFILE_ADDRESS_SUCCESS:
            return {
                ...state,
                addresses       : action.payload.data,
                addressesError  : false,
                addressesLoading: false,
                addressesSuccess: true,
            };

        case GET_PROFILE_ADDRESS_ERROR:
            return {
                ...state,
                addresses       : null,
                addressesError  : true,
                addressesLoading: false,
                addressesSuccess: false,
            };

        case GET_PROFILE_EDUCATION_LOADING:
            return {
                ...state,
                educations       : null,
                educationsError  : false,
                educationsLoading: true,
                educationsSuccess: false,
            };

        case GET_PROFILE_EDUCATION_SUCCESS:
            return {
                ...state,
                educations       : action.payload.data,
                educationsError  : false,
                educationsLoading: false,
                educationsSuccess: true,
            };

        case GET_PROFILE_EDUCATION_ERROR:
            return {
                ...state,
                educations       : null,
                educationsError  : true,
                educationsLoading: false,
                educationsSuccess: false,
            };

        case GET_PROFILE_EXPERIENCE_LOADING:
            return {
                ...state,
                experiences       : null,
                experiencesError  : false,
                experiencesLoading: true,
                experiencesSuccess: false,
            };

        case GET_PROFILE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experiences       : action.payload.data,
                experiencesError  : false,
                experiencesLoading: false,
                experiencesSuccess: true,
            };

        case GET_PROFILE_EXPERIENCE_ERROR:
            return {
                ...state,
                experiences       : null,
                experiencesError  : true,
                experiencesLoading: false,
                experiencesSuccess: false,
            };

        case GET_PROFILE_CONTACT_LOADING:
            return {
                ...state,
                contact       : null,
                contactError  : false,
                contactLoading: true,
                contactSuccess: false,
            };

        case GET_PROFILE_CONTACT_SUCCESS:
            return {
                ...state,
                contact       : action.payload.data,
                contactError  : false,
                contactLoading: false,
                contactSuccess: true,
            };

        case GET_PROFILE_CONTACT_ERROR:
            return {
                ...state,
                contact       : null,
                contactError  : true,
                contactLoading: false,
                contactSuccess: false,
            };

        case PROFILE_COMPLETENESS_RELOAD:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    reload: true,
                },
            };

        case PROFILE_COMPLETENESS_SUCCESS:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    data   : action?.payload?.data?.data,
                    error  : false,
                    reload : false,
                    success: true,
                },
            };

        case PROFILE_COMPLETENESS_ERROR:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    data   : action?.payload,
                    error  : true,
                    success: false,
                },
            };

        case PROFILE_COMPLETENESS_CHECKLIST_SUCCESS:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    checklist: action?.payload?.data?.data?.extraInfo,
                    error    : false,
                    success  : true,
                },
            };

        case PROFILE_COMPLETENESS_CHECKLIST_ERROR:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    checklist: action?.payload,
                    error    : true,
                    success  : false,
                },
            };

        case PROFILE_COMPLETENESS_REPORT_UPDATE:
            return {
                ...state,
                completeness: {
                    ...state.completeness,
                    report: action?.payload,
                },
            };

        case LOGOUT_SUCCESS:
            return initState;

        default:
            return state;
    }
};

export default profileReducer;

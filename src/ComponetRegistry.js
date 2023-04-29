import {CoreH6} from '@wrappid/core';
import CheckUserExist from './module/auth/CheckUserExist';
import LoginWithPassword from './module/auth/LoginWithPassword';
import LoginWithOtp from './module/auth/LoginWithOtp';
import RegisterOrResetPassword from './module/auth/RegisterOrResetPassword';

export const ComponentRegistry = {
  checkUserExist: {comp: <CheckUserExist />},
  loginWithPassword: {comp: <LoginWithPassword />},
  loginWithOtp: {comp: <LoginWithOtp />},
  register: {comp: <RegisterOrResetPassword />},
  resetPassword: {comp: <RegisterOrResetPassword />},
  dashboard: {comp: <CoreH6>Dashboard</CoreH6>},
};

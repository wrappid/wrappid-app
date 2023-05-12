import { CoreH6, CoreIcon } from "@wrappid/core";

import CheckUserExist from "./module/auth/CheckUserExist";
import LoginWithOtp from "./module/auth/LoginWithOtp";
import LoginWithPassword from "./module/auth/LoginWithPassword";
import RegisterOrResetPassword from "./module/auth/RegisterOrResetPassword";

export const ComponentRegistry = {
  Dashboard: {
    comp: (
      <CoreH6>
        Dashboard <CoreIcon type="rxi">alcohol</CoreIcon>
      </CoreH6>
    ),
  },
  checkUserExist: { comp: <CheckUserExist /> },
  loginWithOtp: { comp: <LoginWithOtp /> },
  loginWithPassword: { comp: <LoginWithPassword /> },
  register: { comp: <RegisterOrResetPassword /> },
  resetPassword: { comp: <RegisterOrResetPassword /> },
};

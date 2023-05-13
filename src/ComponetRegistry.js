import { CoreH6, CoreIcon } from "@wrappid/core";

import CheckUserExist from "./modules/auth/CheckUserExist";
import LoginWithOtp from "./modules/auth/LoginWithOtp";
import LoginWithPassword from "./modules/auth/LoginWithPassword";
import RegisterOrResetPassword from "./modules/auth/RegisterOrResetPassword";

export const ComponentRegistry = {
    Dashboard: {
        comp: (
            <CoreH6>Dashboard <CoreIcon type="rxi">alcohol</CoreIcon></CoreH6>
        ),
    },
    checkUserExist   : { comp: <CheckUserExist /> },
    loginWithOtp     : { comp: <LoginWithOtp /> },
    loginWithPassword: { comp: <LoginWithPassword /> },
    register         : { comp: <RegisterOrResetPassword /> },
    resetPassword    : { comp: <RegisterOrResetPassword /> },
};

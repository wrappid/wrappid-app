import { CoreForm } from "@wrappid/core";

export default function CheckUserExist() {

    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get("email");

    // if (checkLoginOrRegisterSuccess && authNextPage !== urls.LOGIN_ROUTE) {
    //     return <Navigate to={"/" + authNextPage} />;
    // }

    return (
        <CoreForm
            initData={{ emailOrPhone: email }}
            formId={"checkUserExist"}
            mode={"edit"} // commented since default mode : edit
            authenticated={false}
        />
    );
}

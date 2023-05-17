import { useSelector } from "react-redux";
import {
    CoreIcon,
    CoreLabel,
    CoreTypographyBody1,
    CoreIconButton,
    CoreBox,
    CoreGrid,
    CoreCardHeader,
    CoreClasses
} from '@wrappid/core'
import { nativeUseNavigate } from "@wrappid/styled-components";


export default function ContactInfoCard() {
    const navigate = nativeUseNavigate();
    const contactInfo = useSelector((state) => state.profile.contact);
    const { phone, email, phoneVerified, emailVerified } = contactInfo;

    return (
        <>
            <CoreCardHeader
                styleClasses={[CoreClasses.PADDING.P0, CoreClasses.PADDING.PR1]}
                title={
                    <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
            Contact Info
                    </CoreTypographyBody1>
                }
                action={
                    <CoreIconButton
                        title={"Edit Contact Info"}
                        onClick={() => {
                            navigate(`/settings#account`);
                        }}
                    >
                        <CoreIcon>edit_note</CoreIcon>
                    </CoreIconButton>
                }
            />

            <CoreGrid>
                <CoreBox gridProps={{ gridSize: { sm: 5 } }}>
                    <CoreLabel>Primary Phone</CoreLabel>

                    {/* <RxPhoneLink phone={phone} verified={phoneVerified} /> */}
                </CoreBox>

                <CoreBox gridProps={{ gridSize: { sm: 5 } }}>
                    <CoreLabel>Primary Email</CoreLabel>

                    {/* <RxEmailLink email={email} verified={emailVerified} /> */}
                </CoreBox>

                {/* -- {profile && (
                    <CoreBox gridProps={{ gridSize: 3 }}>
                    <CoreTypographyBody1>Profile</CoreTypographyBody1>
                    <CoreTypographyBody1>{profile}</CoreTypographyBody1>
                    </CoreBox>
                )}
                {website && (
                    <CoreBox gridProps={{ gridSize: 3 }}>
                    <CoreTypographyBody1>Website</CoreTypographyBody1>
                    <CoreTypographyBody1>{website}</CoreTypographyBody1>
                    </CoreBox>
                )} */}
            </CoreGrid>
        </>
    );
}

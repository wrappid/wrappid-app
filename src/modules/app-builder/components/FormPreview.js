import React from "react";

import {
    CoreInput, CoreTypographyBody1, CoreForm, CoreJSONInput, CoreBox, CoreGrid, CoreTab, CoreTabPanel, CoreTabs, CorePaper
} from "@wrappid/core";

import AppClasses from "../../../styles/AppClasses";

export default function FormPreview(props) {
    const FORM_EDIT_MODE = "edit";
    const FORM_VIEW_MODE = "view";
    const { initData } = props;
    const {
        name, formID, authRequired, _status, schema, extraInfo 
    } = initData;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <CoreGrid>
                <CoreInput gridProps={{ gridSize: { sm: 3 } }} label="Name" value={name} />

                <CoreInput gridProps={{ gridSize: { sm: 3 } }} label="Form ID" value={formID} />

                <CoreInput gridProps={{ gridSize: { sm: 3 } }} label="Auth Required" value={authRequired} />

                <CoreInput gridProps={{ gridSize: { sm: 3 } }} label="Status" value={_status} />

                <CoreJSONInput
                    gridProps={{ gridSize: 12 }}
                    label="Extra Info"
                    value={extraInfo}
                    readOnly={true}
                />
            </CoreGrid>

            <CoreBox sx={{ width: "100%" }}>
                <CoreBox sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <CoreTab label="Form" />

                        <CoreTab label="Preview View Mode" />

                        <CoreTab label="Preview Edit Mode" />
                    </CoreTabs>
                </CoreBox>

                <CoreTabPanel value={value} index={0}>
                    <CoreTypographyBody1>
                        <pre>{JSON.stringify(schema, null, 4)}</pre>
                    </CoreTypographyBody1>

                    {/* -- <CoreForm mode={FORM_VIEW_MODE} formId="FormSchemas" initData={initData} /> */}
                </CoreTabPanel>

                <CoreTabPanel value={value} index={1}>
                    <CorePaper styleClasses={[AppClasses.CORE.PADDING.P1]} gridProps={{ gridSize: { sm: 6 } }}>
                        {" "}

                        <CoreForm mode={FORM_VIEW_MODE} formId={`${formID}`} preview={true} />
                    </CorePaper>
                </CoreTabPanel>

                <CoreTabPanel value={value} index={2}>
                    <CorePaper styleClasses={[AppClasses.CORE.PADDING.P1]} gridProps={{ gridSize: { sm: 6 } }}>
                        {" "}

                        <CoreForm mode={FORM_EDIT_MODE} formId={`${formID}`} preview={true} />
                    </CorePaper>
                </CoreTabPanel>
            </CoreBox>
        </>
    );
}

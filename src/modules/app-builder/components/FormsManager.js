import { CoreDataTable } from "@wrappid/core";

function FormsManager() {
    return (
        <CoreDataTable
            enableCreate={true}
            entity={"FormSchemas"}/>
    );
}

export default FormsManager;
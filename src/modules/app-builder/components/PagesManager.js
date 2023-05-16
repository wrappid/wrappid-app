import { CoreDataTable } from "@wrappid/core";

export default function PagesManager() {
    return (
        <CoreDataTable
            entity="Pages"
            createFormID={"PageForm"}
            updateFormID={"PageForm"}
        />
    );
}

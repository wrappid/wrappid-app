import { CoreDataTable } from "@wrappid/core";

export default function BusinessEntityManager() {
    return (
        <CoreDataTable
            entity={"Routes"}
            createFormID={"RouteForm"}
            updateFormID={"RouteForm"}
        />
    );
}

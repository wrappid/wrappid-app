import { CoreDataTable } from "@wrappid/core";

export default function RoutesManager() {
    return (
        <CoreDataTable
            entity={"Routes"}
            createFormID={"RouteForm"}
            updateFormID={"RouteForm"}
        />
    );
}

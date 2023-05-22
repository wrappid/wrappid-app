import { AppBuilderComponentRegistry } from "./app-builder/components.registry";
import { ProfileComponentRegistry } from "./profile/components.registry";

export default {
    ...AppBuilderComponentRegistry,
    ...ProfileComponentRegistry
};
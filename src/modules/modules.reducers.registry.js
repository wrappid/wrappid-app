import { AppBuilderReducerRegistry } from "./app-builder/reducer.registry";
import { ProfileReducerRegistry } from "./profile/reducer.registry";

const allReducers =  { ...AppBuilderReducerRegistry, ...ProfileReducerRegistry };

export default allReducers;
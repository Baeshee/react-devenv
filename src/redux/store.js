import { createStore } from "redux";
import rootReducer from "./reducers/reducers_index";

export const store = createStore(
    rootReducer,
);
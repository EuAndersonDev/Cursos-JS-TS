import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = reducers => {
    const persistedReducer = persistReducer({
        key: "react-base",
        storage,
        whitelist: ["example"]
    }, reducers)

    return persistedReducer;
}

export default persistConfig;

import { configureStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducers from "./Rootreducers";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
  return configureStore(RootReducers, compose(applyMiddleware(thunk)));
};

export default createWrapper(makeStore, { debug: true });

import { Instance, onSnapshot, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { Cart } from "./Cart";
import { Counter } from "./Counter";

const RootModel = types.model({
  counter: Counter,
  cart: Cart,
});

let initialState = RootModel.create({
  counter: {
    count: 0,
  },
  cart: { items: [] },
});

if (process.browser) {
  const data = localStorage.getItem("rootState");
  if (data) {
    const json = JSON.parse(data);
    if (RootModel.is(json)) {
      initialState = RootModel.create(json);
    }
  }
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  console.log("Snapshot: ", snapshot);
  localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}

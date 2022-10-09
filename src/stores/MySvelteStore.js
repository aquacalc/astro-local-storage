import { writable } from "svelte/store";
// import LZString from "lz-string";

const myStore = (name, initialValue, toStorage = [], fromStorage = []) => {
  // see: https://docs.astro.build/en/guides/troubleshooting/#common-cause
  // "This can be caused by attempting to access the window or document object
  // at render time. By default, Astro will render your component isomorphically,
  // meaning it runs on the server where the browser runtime is not available.
  // You can disable this pre-render step using the client:only directive."

  // [NB] Used in index.astro as <Test client:only />

  // console.log(`WINDOW: `, window);

  if (window?.localStorage) {
    const storedValue = window.localStorage.getItem(name);

    if (storedValue) {
      initialValue = fromStorage.reduce((acc, fn) => fn(acc), storedValue);
      // initialValue = storedValue;
    }
  }

  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,

    set: (x) => {
      if (window?.localStorage) {
        window.localStorage.setItem(
          name,
          toStorage.reduce((acc, fn) => fn(acc), x)
        );
      }
      set(x);
    },

    // set: (x) => {
    //   set(x);
    // },
  };
};

export const myStoredValue = myStore(
  "myStoredValue",
  {
    myValue: "27",
  },
  [JSON.stringify],
  [JSON.parse]
);

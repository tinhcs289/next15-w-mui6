/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import lodashGet from "lodash/get";
import isEqual from "lodash/isEqual";
import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type BaseStates = { [x: string]: any };

export type UseSetStateReturns<StateValues extends BaseStates = BaseStates> = (
  value: Partial<StateValues> | ((states?: StateValues) => StateValues)
) => void;

/**
 * Super tiny helper for state management base on React Context API
 * @example
    // Step 1: create a context which provides functions
    const { Provider, useGetState, useSetState, useInitState } = createFastContext<{ backgroundColor: string }>();

    // Step 2: Wrap Components inside the `<Provider />` component
    <Provider>
      <YourComponents />
    </Provider>

    // How to init default value for a state
    useInitState('backgroundColor', 'red');

    // How to get a state from store
    const backgroundColor = useGetState((store) => store.backgroundColor);

    // How to update a state in store
    const setState = useSetState();
    ...
    setState({ backgroundColor: 'blue' })}

    // How to add a action to store
    // option 1: the original way
    const { ... } = createStatesContext<{ ..., someFunctionToCall: (params: ...) => void }>();
    ....
    const someFunctionToCall = useCallback((params: ...) => { ... }, [...]);
    useInitState('someFunctionToCall', someFunctionToCall, { when: 'whenever-value-changes' });
    // option 1: the shorter way
    const { ..., useAction } = createStatesContext<{ ..., someFunctionToCall: (params: ...) => void } }>();
    ....
    const someFunctionToCall = useAction('someFunctionToCall',(params: ...) => { ... }, [...]);

    // How to use a function which has been added to store.
    const someFunctionToCall = useGetState((store) => store.someFunctionToCall);
    ...
    someFunctionToCall?.(...);
 */
export default function createStatesContext<
  StateValues extends BaseStates = BaseStates
>(initialState?: StateValues) {
  function useContextStatesData(): {
    get: () => StateValues;
    set: UseSetStateReturns<StateValues>;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState as StateValues);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set: UseSetStateReturns<StateValues> = useCallback((value) => {
      if (typeof value === "function") {
        store.current = { ...store.current, ...value(store.current) };
        subscribers.current.forEach((callback) => callback());
        return;
      }
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return { get, set, subscribe };
  }

  type UseContextStatesDataReturns = ReturnType<typeof useContextStatesData>;

  const StoreContext = createContext<UseContextStatesDataReturns | null>(null);

  function StatesProvider({ children }: { children: ReactNode }) {
    return (
      <StoreContext.Provider value={useContextStatesData()}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useGetState<SelectorOutput>(
    selector: (store: StateValues) => SelectorOutput
  ): SelectorOutput {
    const store = useContext(StoreContext);

    if (!store) {
      throw new Error("Store not found");
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState as StateValues)
    );

    return state;
  }

  function useSetState(): UseSetStateReturns<StateValues> {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }
    return store.set;
  }

  function useInitState(
    field: keyof StateValues,
    value?: number | string | boolean | Array<any> | { [x: string]: any },
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    options: {
      when: "once-on-mount" | "whenever-value-changes";
    } = {
      when: "once-on-mount",
    }
  ) {
    const forceUpdate = options?.when === "whenever-value-changes";

    const setState = useSetState();
    const state = useGetState((s) => lodashGet(s, field));
    const [init, setInit] = useState(false);

    useEffect(() => {
      if (init && !forceUpdate) return;
      if (
        (typeof value === "undefined" || value === null || value === "") &&
        !forceUpdate
      ) {
        return;
      }

      if (value instanceof Array || typeof value === "object") {
        if (isEqual(value, state)) return;
        setInit(true);
        setState({ [field]: value } as any);
        return;
      }

      if (typeof value === "function") {
        setInit(true);
        setState({ [field]: value } as any);
        return;
      }

      if (value === state) return;

      setInit(true);
      setState({ [field]: value } as any);
      // eslint-disable-next-line no-useless-return
      return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return init;
  }

  function useAction<F extends Function>(
    actionName: keyof StateValues,
    ...useCallbackParams: Parameters<typeof useCallback<F>>
  ) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const callback = useCallback<F>(...useCallbackParams);
    useInitState(actionName, callback, { when: "whenever-value-changes" });
    return callback;
  }

  return {
    StatesProvider,
    useGetState,
    useSetState,
    useInitState,
    useAction,
  };
}

export type CreateStatesContext<StateValues extends BaseStates = BaseStates> =
  ReturnType<typeof createStatesContext<StateValues>>;

export type UseGetState<StateValues extends BaseStates = BaseStates> =
  CreateStatesContext<StateValues>["useGetState"];

export type UseSetState<StateValues extends BaseStates = BaseStates> =
  CreateStatesContext<StateValues>["useSetState"];

export type UseInitState<StateValues extends BaseStates = BaseStates> =
  CreateStatesContext<StateValues>["useInitState"];

export type UseAction<StateValues extends BaseStates = BaseStates> =
  CreateStatesContext<StateValues>["useAction"];
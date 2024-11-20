const PATHS = {
    main: "/",
    login: "/login",
    logout: "/logout",
};
export default PATHS;
  
export const ALL_PATHS = Object.keys(PATHS).reduce(
  (l, k) => [...l, PATHS[k as keyof typeof PATHS]],
  [] as string[]
);
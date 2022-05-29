export const ROUTE_PATHS = {
  HOME: '/',
  USERS: '/users',
} as const;

export type RoutePathType = typeof ROUTE_PATHS.USERS | typeof ROUTE_PATHS.HOME;

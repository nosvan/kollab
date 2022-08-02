export const ApiRoutes = {
  RESET: '/api/account/reset',
  LOGIN: '/api/account/login',
  REGISTER: '/api/account/register',
  LOGOUT: '/api/account/logout',
}

export const OwnApiRoutes = {
  NEW_ITEM: '/api/item/own/new',
  GET_ITEMS: '/api/item/own/item'
}

export const ListApiRoutes = {
  GET_LISTS: '/api/list/list',
  GET_ITEMS: '/api/list/item/item',
  NEW_ITEM: '/api/list/item/new',
  JOIN_LIST: '/api/list/join',
  NEW_LIST: '/api/list/new',
  LIST_USERS: '/api/list/users'
}

export const ItemApiRoutes = {
  DELETE: '/api/list/item/remove'
}
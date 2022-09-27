import { THEME_COLOR, NAVBAR_BG, SIDEBAR_BG, DIRECTION, DARK_THEME } from '../constants';

export const setTheme = (payload: string) => ({
  type: THEME_COLOR,
  payload
});
export const setDarkMode = (payload: string) => ({
  type: DARK_THEME,
  payload
});
export const setNavbarBg = (payload: string) => ({
  type: NAVBAR_BG,
  payload
});

export const setSidebarBg = (payload: string) => ({
  type: SIDEBAR_BG,
  payload
});

export const setDir = (payload: string) => ({
  type: DIRECTION,
  payload
});

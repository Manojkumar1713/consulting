const USER_KEY = 'google-user';

export const setUser = (credential) => {
  localStorage.setItem(USER_KEY, credential);
};

export const getUser = () => {
  return localStorage.getItem(USER_KEY);
};

export const logoutUser = () => {
  localStorage.removeItem(USER_KEY);
};

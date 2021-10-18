import http from './httpService';

export const getOneUser = (id) => {
  return http.get(`users/${id}`);
};

export const addNewUser = (data) => {
  const header = {
    headers: {
      Authorization: 'Bearer SECURE_TOKEN',
    },
  };

  return http.post('users', data, header);
};

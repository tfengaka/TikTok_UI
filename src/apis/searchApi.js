import axiosClient from './axiosClient';

export const searchingUsers = async (searchQuery, type) => {
  const response = await axiosClient.get('/users/search', {
    params: {
      q: searchQuery || ' ',
      type: type,
    },
  });

  return response.data;
};

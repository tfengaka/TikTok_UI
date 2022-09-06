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

export const getSuggestedUsers = async (page = 1, limit = 5) => {
  const response = await axiosClient.get('users/suggested', {
    params: {
      page: page,
      per_page: limit,
    },
  });
  return response.data;
};

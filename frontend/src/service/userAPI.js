import API_BASE_URL from './config';

export const getUsers = async (token) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

export const getUserById = async (id, token) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_BASE_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
};

export const updateProfile = async (userData, token) => {
  const response = await fetch(`${API_BASE_URL}/users/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to update profile');
  return response.json();
};

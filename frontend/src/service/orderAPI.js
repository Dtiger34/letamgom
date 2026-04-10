import API_BASE_URL from './config';

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) throw new Error('Failed to create order');
  return response.json();
};

export const getUserOrders = async (token) => {
  const response = await fetch(`${API_BASE_URL}/orders/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch user orders');
  return response.json();
};

export const getAllOrders = async (token) => {
  const response = await fetch(`${API_BASE_URL}/orders/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch all orders');
  return response.json();
};

export const getOrderById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`);
  if (!response.ok) throw new Error('Failed to fetch order');
  return response.json();
};

export const updateOrderStatus = async (id, status, token) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Failed to update order');
  return response.json();
};

export const cancelOrder = async (id) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to cancel order');
  return response.json();
};

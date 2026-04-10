import API_BASE_URL from './config';

export const sendContactMessage = async (data) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to send message');
  return response.json();
};

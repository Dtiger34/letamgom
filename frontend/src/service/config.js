const BASE_URL = import.meta.env.DEV ? 'http://localhost:5000' : 'https://lientamgom.site';
const API_BASE_URL = import.meta.env.VITE_API_URL || `${BASE_URL}/api/v1`;

export { BASE_URL };
export default API_BASE_URL;

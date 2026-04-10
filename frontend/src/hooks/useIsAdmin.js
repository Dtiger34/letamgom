import { useState } from 'react';

export function useIsAdmin() {
  const [isAdmin] = useState(() => {
    try {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        return userData.role === 'admin';
      }
    } catch {
      // Silently fail if user data is invalid
    }
    return false;
  });

  return isAdmin;
}

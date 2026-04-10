import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

export function useToast() {
  const { addToast } = useContext(ToastContext);

  return {
    success: (message, duration = 3000) => addToast(message, 'success', duration),
    error: (message, duration = 3000) => addToast(message, 'error', duration),
    info: (message, duration = 3000) => addToast(message, 'info', duration),
    warning: (message, duration = 3000) => addToast(message, 'warning', duration),
  };
}

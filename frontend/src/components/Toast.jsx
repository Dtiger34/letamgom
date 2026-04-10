import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';
import './Toast.css';

export default function Toast() {
  const { toasts, removeToast } = useContext(ToastContext);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span className="toast-message">{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => removeToast(toast.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

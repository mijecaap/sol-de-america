import { useState, useCallback } from 'react';

interface ToastOptions {
  message: string;
  type: 'success' | 'error';
  duration?: number;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  const showToast = useCallback(({ message, type, duration = 3000 }: ToastOptions) => {
    setToast({ message, type, duration });
    setTimeout(() => {
      setToast(null);
    }, duration);
  }, []);

  return { toast, showToast };
};
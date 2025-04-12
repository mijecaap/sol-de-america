interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose?: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  return (
    <div className="fixed bottom-28 right-4 z-50 animate-fade-in">
      <div
        className={`${
          type === 'success' ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'
        } px-6 py-4 rounded-lg border text-white flex items-center gap-3 shadow-lg`}
      >
        <i
          className={`${
            type === 'success' ? 'fa-solid fa-check' : 'fa-solid fa-exclamation'
          } text-xl`}
          aria-hidden="true"
        />
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4"
            aria-label="Cerrar notificación"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
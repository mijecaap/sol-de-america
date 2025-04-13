interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose?: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 z-50 animate-fade-in w-[90%] md:w-auto">
      <div
        className={`${
          type === 'success' ? 'bg-green-600 border-green-700' : 'bg-red-600 border-red-700'
        } px-4 md:px-6 py-3 md:py-4 rounded-lg border text-white flex items-center gap-2 md:gap-3 shadow-lg max-w-full`}
      >
        <i
          className={`${
            type === 'success' ? 'fa-solid fa-check' : 'fa-solid fa-exclamation'
          } text-lg md:text-xl flex-shrink-0`}
          aria-hidden="true"
        />
        <p className="text-sm md:text-base break-words">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 md:ml-4 flex-shrink-0"
            aria-label="Cerrar notificación"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};
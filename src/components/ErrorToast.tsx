import { useEffect } from "react";

type ErrorToastProps = {
  message: string;
  onClose: () => void;
};

export default function ErrorToast({ message, onClose }: ErrorToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="alert"
      className="fixed right-5 top-5 z-[200] flex w-[calc(100%-2.5rem)] max-w-sm items-start gap-3 rounded-xl border border-red-400/20 bg-[#1D1E28]/95 p-4 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
        !
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-red-400">Something went wrong</h3>

        <p className="mt-1 text-sm text-white/70">{message}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close error notification"
        className="text-white/50 transition hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}

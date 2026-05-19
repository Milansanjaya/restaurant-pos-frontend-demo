/**
 * Notification utility for displaying toast messages.
 * This keeps a toast-like API surface used across pages.
 */

type NotifyOptions = {
  id?: string;
  duration?: number;
  [key: string]: any;
};

const notify = {
  success: (message: string, _options?: NotifyOptions) => {
    console.log("Success:", message);
  },

  error: (message: string, _options?: NotifyOptions) => {
    console.error("Error:", message);
  },

  warning: (message: string, _options?: NotifyOptions) => {
    console.warn("Warning:", message);
  },

  info: (message: string, _options?: NotifyOptions) => {
    console.info("Info:", message);
  },

  loading: (message: string) => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    console.info("Loading:", message, { id });
    return id;
  },

  dismiss: (_id?: string) => {
    // No-op placeholder for compatibility.
  },
};

export default notify;

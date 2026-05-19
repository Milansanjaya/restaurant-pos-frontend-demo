/**
 * Notification utility for displaying toast messages
 * Using browser's native alert for simplicity, can be extended with a toast library like react-hot-toast
 */

const notify = {
  success: (message: string, _options?: { id?: string; duration?: number }) => {
    console.log('✓ Success:', message);
    // Using alert for now - can be replaced with react-hot-toast or similar
    if (typeof window !== 'undefined') {
      // You can extend this to use a toast library like:
      // toast.success(message);
      console.log(message);
    }
  },

  error: (message: string, _options?: { id?: string; duration?: number }) => {
    console.error('✗ Error:', message);
    // Using alert for now - can be replaced with react-hot-toast or similar
    if (typeof window !== 'undefined') {
      // You can extend this to use a toast library like:
      // toast.error(message);
      console.error(message);
    }
  },

  warning: (message: string) => {
    console.warn('⚠ Warning:', message);
    if (typeof window !== 'undefined') {
      console.warn(message);
    }
  },

  info: (message: string) => {
    console.info('ℹ Info:', message);
    if (typeof window !== 'undefined') {
      console.info(message);
    }
  },

  loading: (message: string) => {
    console.log('⏳ Loading:', message);
    if (typeof window !== 'undefined') {
      console.log(message);
    }
    return 'loading-id'; // Return a simple ID for now
  },
};

export default notify;

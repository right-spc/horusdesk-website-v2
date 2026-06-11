import { useState, useCallback } from 'react';

interface BookingModalState {
  isOpen: boolean;
  prefillInterest?: string;
}

export function useBookingModal() {
  const [state, setState] = useState<BookingModalState>({ isOpen: false });

  const open = useCallback((prefillInterest?: string) => {
    setState({ isOpen: true, prefillInterest });
  }, []);

  const close = useCallback(() => {
    setState({ isOpen: false });
  }, []);

  return {
    isOpen: state.isOpen,
    prefillInterest: state.prefillInterest,
    open,
    close,
  };
}

import { createContext, useContext } from 'react';

export interface BookingContextType {
  isOpen: boolean;
  prefillInterest?: string;
  open: (prefillInterest?: string) => void;
  close: () => void;
}

export const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export function openChatWidget(): boolean {
  const hd = (window as unknown as { horusDesk?: { open?: () => void } }).horusDesk;
  if (hd?.open) {
    hd.open();
    return true;
  }
  return false;
}

export type ToastType = 'error' | 'warning' | 'success' | 'info';

export type toastItemType = {
  id: number;
  type: ToastType;
  message: string;
  isOpen: boolean;
  remove?: boolean;
};

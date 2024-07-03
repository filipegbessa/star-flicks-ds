import { ToastType, IconsType, toastItemType } from '../../types';
import { SFButton } from '../SFButton/SFButton';
import { SFIcon } from '../SFIcon/SFIcon';
import { SFTypography } from '../SFTypography/SFTypography';

type styleProps = {
  [key in ToastType]: {
    content: string;
    text: string;
    icon: IconsType;
  };
};

type SFToastProps = {
  onRemove?: (id: number) => void;
  list: toastItemType[];
};

export const SFToast = ({ list, onRemove }: SFToastProps) => {
  const style: styleProps = {
    error: {
      content: 'bg-alert-error-primary border-alert-error-secondary',
      text: '!text-alert-error-text',
      icon: 'alertError',
    },
    warning: {
      content: 'bg-alert-warning-primary border-alert-warning-secondary',
      text: '!text-alert-warning-text',
      icon: 'alertWarning',
    },
    success: {
      content: 'bg-alert-success-primary border-alert-success-secondary',
      text: '!text-alert-success-text',
      icon: 'alertSuccess',
    },
    info: {
      content: 'bg-alert-info-primary border-alert-info-secondary',
      text: '!text-alert-info-text',
      icon: 'alertInfo',
    },
  };

  return (
    <div className='contentCenter fixed bottom-5 left-2/4 z-20 flex w-auto max-w-72 -translate-x-2/4 flex-col gap-2'>
      {list.map(({ type, message, id, remove }) => (
        <div
          key={id}
          className={`flex h-14 w-72 items-center gap-2 rounded-md border-2 px-2 ${style[type].content}`}
        >
          <div className='hidden sm:flex'>
            <SFIcon
              name={style[type].icon}
              className={`text-[30px] ${style[type].text}`}
            />
          </div>
          <div className='flex flex-1'>
            <SFTypography weight='medium' className={`${style[type].text}`}>
              {message}
            </SFTypography>
          </div>
          {remove && (
            <div className='flex'>
              <SFButton
                onClick={() => onRemove?.(id)}
                icon='close'
                size='xs'
                variant='default'
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

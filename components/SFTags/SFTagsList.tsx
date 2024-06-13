import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { SFTagsListItem } from './SFTagsListItem';

export type ISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SFTagsListProps = {
  list: {
    id: number;
    name: string;
  }[];
  size?: ISize;
  link?: string;
  hasScroll?: boolean;
};

export const SFTagsList = ({ list, hasScroll, ...props }: SFTagsListProps) => {
  return (
    <div className='flex gap-1 overflow-hidden items-center relative'>
      {hasScroll ? (
        <Swiper
          freeMode
          modules={[FreeMode]}
          slidesPerView={'auto'}
          className='px-5 SFTagsList'
        >
          <span
            slot='container-start'
            className='h-full w-10 absolute top-0 left-0 text-body z-10 bg-gradient-to-r from-body to-transparent'
          />
          <span
            slot='container-end'
            className='h-full w-10 absolute top-0 right-0 z-10 bg-gradient-to-l from-body to-transparent'
          />

          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <SFTagsListItem item={item} {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        list.map((item) => (
          <SFTagsListItem key={item.id} item={item} {...props} />
        ))
      )}
    </div>
  );
};

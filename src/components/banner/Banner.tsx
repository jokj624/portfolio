import BlackBox from '../common/BlackBox';
import { BANNER_ITEM_LIST } from '@/constants/objects/BannerItemList';

import Style from './Banner.module.scss';
import React from 'react';

const getItemList = (): JSX.Element[] => {
  return Object.keys(BANNER_ITEM_LIST).map((key: string) => {
    return (
      <React.Fragment key={key}>
        <div className={Style.Banner__itemContainer__item}>
          <div className={Style.Banner__itemContainer__item__number}>{key}</div>
          <div>{BANNER_ITEM_LIST[key]}</div>
        </div>
        <div className={Style.Banner__itemContainer__item__line} />
      </React.Fragment>
    );
  });
};

const Banner = (): JSX.Element => {
  return (
    <div className={Style.Banner}>
      <BlackBox />
      <div className={Style.Banner__itemContainer}>{getItemList()}</div>
      <div className={Style.Banner__rowLine} />
    </div>
  );
};

export default Banner;

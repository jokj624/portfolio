import React from 'react';

import { BlackBox } from '../Common/BlackBox';
import { Line } from '../Common/Line';

import { BANNER_ITEM_LIST } from '@/constants/objects';

import Style from './Banner.module.scss';

const getItemList = (): JSX.Element[] => {
  return Object.keys(BANNER_ITEM_LIST).map((key: string) => {
    return (
      <React.Fragment key={key}>
        <div className={Style.Banner__itemContainer__item}>
          <div className={Style.Banner__itemContainer__item__number}>{key}</div>
          <div>{BANNER_ITEM_LIST[key]}</div>
        </div>
        <Line direction="col" />
      </React.Fragment>
    );
  });
};

const Banner = (): JSX.Element => {
  return (
    <div className={Style.Banner}>
      <BlackBox />
      <div className={Style.Banner__itemContainer}>{getItemList()}</div>
      <Line direction="row" />
    </div>
  );
};

export default Banner;

import React from 'react';
import { Line } from '@/components/Common/Line';

import Style from './Education.module.scss';

const Education = () => {
  return (
    <React.Fragment>
      <Line direction="row" />
      <div className={Style.Education}>
        <div className={Style.Education__title}>Education</div>
        <Line direction="col" />
        <div className={Style.Education__contentWrapper}>
          <Line direction="row" />
          <div className={Style.Education__contentWrapper__item}>
            <div className={Style.Education__contentWrapper__item__date}>
              2018. 03 - 2023. 02
            </div>
            <div className={Style.Education__contentWrapper__item__content}>
              <div
                className={
                  Style.Education__contentWrapper__item__content__school
                }
              >
                숙명여자대학교
              </div>
              <div
                className={Style.Education__contentWrapper__item__content__info}
              >
                <div>소프트웨어학부 소프트웨어융합전공</div>
                <div>GPA 3.91/4.5</div>
              </div>
            </div>
          </div>
          <div className={Style.Education__contentWrapper__item}>
            <div className={Style.Education__contentWrapper__item__date}>
              2015. 03 - 2018. 02
            </div>
            <div className={Style.Education__contentWrapper__item__content}>
              <div
                className={
                  Style.Education__contentWrapper__item__content__school
                }
              >
                서울 계성고등학교
              </div>
              <div
                className={Style.Education__contentWrapper__item__content__info}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;

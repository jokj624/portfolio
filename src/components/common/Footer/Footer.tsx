import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FOOTER_ICON_LIST } from '@/constants/objects/footerIconList';

import Style from './Footer.module.scss';

const getLinkIcons = (): JSX.Element[] => {
  return Object.keys(FOOTER_ICON_LIST).map((key: string) => {
    return (
      <React.Fragment key={key}>
        <Link href={key} passHref>
          <FontAwesomeIcon
            icon={FOOTER_ICON_LIST[key]}
            className={Style.Footer__iconWrapper__icon}
          />
        </Link>
      </React.Fragment>
    );
  });
};

const Footer = (): JSX.Element => {
  return (
    <div className={Style.Footer}>
      <div className={Style.Footer__year}>2018 - 2023</div>
      <div className={Style.Footer__copyright}>
        CHAE JEONG AH | ALL RIGHTS RESERVED
      </div>
      <div className={Style.Footer__iconWrapper}>{getLinkIcons()}</div>
    </div>
  );
};

export default Footer;

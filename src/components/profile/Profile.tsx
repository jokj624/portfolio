import Image from 'next/image';
import Link from 'next/link';

import { PROFILE_LIST } from '@/constants/objects/profileList';

import profileImage from 'public/static/images/profile.png';
import arrowImage from 'public/static/images/arrow.png';

import Style from './Profile.module.scss';
import React from 'react';

const getItemList = (): JSX.Element[] => {
  return Object.keys(PROFILE_LIST).map((key: string) => {
    return (
      <React.Fragment key={key}>
        <div className={Style.Profile__profileBox__itemWrapper}>
          <div>{key}</div>
          <div>{PROFILE_LIST[key]}</div>
          {(key == 'Github' || key == 'Blog') && (
            <Link href={PROFILE_LIST[key]} passHref>
              <Image src={arrowImage} alt="Link" placeholder="blur" />
            </Link>
          )}
        </div>
        <div className={Style.Profile__profileBox__rowLine} />
      </React.Fragment>
    );
  });
};

const Profile = (): JSX.Element => {
  return (
    <div className={Style.Profile}>
      <div>
        <Image
          src={profileImage}
          className={Style.Profile__profileImage}
          alt="Picture of me"
          placeholder="blur"
        />
      </div>
      <div className={Style.Profile__profileBox}>
        <div className={Style.Profile__profileBox__name}>Chae Jeong Ah</div>
        <p>Profile</p>
        <div className={Style.Profile__profileBox__rowLine} />
        {getItemList()}
      </div>
    </div>
  );
};

export default Profile;

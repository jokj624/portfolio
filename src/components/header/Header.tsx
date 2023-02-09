import { BlackBox } from '../Common/BlackBox';
import { Line } from '../Common/Line';

import Style from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <div className={Style.Header}>
      <BlackBox />
      <div className={Style.Header__flexWrapper}>
        <div className={Style.Header__flexWrapper__nickname}>Jobchae</div>
        <div className={Style.Header__flexWrapper__stacks}>
          Javascript, Typescript <br /> Node.js, Nest.js <br /> Docker, CI/CD
        </div>
        <div className={Style.Header__flexWrapper__intro}>
          I'm a junior backend developer <br /> who loves the js ecosystem and
          <br />
          deep dive into Node.js and Typescripts.
        </div>
      </div>
      <Line direction="row" />
      <div className={Style.Header__title}>
        <div className={Style.Header__title__text}>Growing</div>
        <div className={Style.Header__title__text}>Junior Backend</div>
        <div className={Style.Header__title__text}>Developer Jobchae.</div>
      </div>
    </div>
  );
};

export default Header;

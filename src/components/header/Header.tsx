import Style from '@/components/header/Header.module.scss';

const Header = () => {
  return (
    <div className={Style.Header}>
      <div className={Style.Header__box} />
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
      <div className={Style.Header__rowLine} />
      <div className={Style.Header__title}>
        <div className={Style.Header__title__text}>Growing</div>
        <div className={Style.Header__title__text}>Junior Backend</div>
        <div className={Style.Header__title__text}>Developer Jobchae.</div>
      </div>
    </div>
  );
};

export default Header;

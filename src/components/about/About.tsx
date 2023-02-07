import { Line } from '../common/Line';

import Style from './About.module.scss';

const About = (): JSX.Element => {
  return (
    <div className={Style.About}>
      <Line direction="row" />
      <div className={Style.About__title}>About</div>
      <div className={Style.About__rowWrapper}>
        <div className={Style.About__rowWrapper__innerWrapper}>
          <div className={Style.About__rowWrapper__innerWrapper__title}>
            관심 직무
          </div>
          <div className={Style.About__rowWrapper__innerWrapper__desc}>
            Backend Developer <br /> Node.js Developer
          </div>
        </div>
        <div className={Style.About__rowWrapper__innerWrapper}>
          <div className={Style.About__rowWrapper__innerWrapper__title}>
            의심하는 개발자, 채정아입니다.
          </div>
          <div className={Style.About__rowWrapper__innerWrapper__desc}>
            javascript 생태계를 사랑하고, Node.js와 Typescript에 Deep Dive 중인
            주니어 백엔드 개발자 채정아입니다. <br />딱 한가지 키워드로 개발자
            채정아를 표현하자면, ‘의심’입니다. 아직 개발을 오래 한건 아니지만
            지금까지 세워 온 제 개발 철학입니다. <br />
            ’나는 항상 나와 나의 팀을 의심해야한다’ <br />
            나와 우리팀이 작성한 코드, 설계한 모든 것, 생각한 모든 것들은 항상
            의심해야한다는 마인드입니다. <br />
            개발자가 자신에게 만족한다면, 그 개발자와 팀, 서비스 모두 발전할 수
            없다고 생각합니다.
            <br /> <br /> <br />
            매 순간 가장 효율적인 방식으로 구현하고 있는지에 대한 의심이
            필요합니다. <br />
            끊임없는 의심을 통해 서비스는 더 빠르고, 유연하고, 생산성있어집니다.
            아직 많이 부족하지만, 끊임없이 공부하고 있습니다. <br />
            지식은 공유되어 다시 내게로 돌아온다는 지식 공유의 선순환 구조를
            믿으며 Node.js 세미나 진행, 블로그 운영 등 다양한 형태로
            노력중입니다.
            <br />
            다양한 사람들과 네트워킹 하는 것도 좋아해 언제든 IT 이야기를 나눌 수
            있다면 커피챗도 환영합니다! <br />
            감사합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { TECH_STACK_LIST } from '@/constants/objects';
import { TechStackCard } from '../TechStackCard';
import Style from './TechStack.module.scss';

const getTeckStacks = (): JSX.Element[] => {
  return Object.keys(TECH_STACK_LIST).map((key: string) => {
    return <TechStackCard key={key} title={key} icon={TECH_STACK_LIST[key]} />;
  });
};

const TechStack = () => {
  return (
    <div className={Style.TechStack}>
      {getTeckStacks()}
      <div className={Style.TechStack__text}>
        What <br /> I Can Do.
      </div>
    </div>
  );
};

export default TechStack;

import Style from './Line.module.scss';

interface Props {
  direction: string;
}

const Line = (props: Props) => {
  return <div className={Style[`Line--${props.direction}`]} />;
};

export default Line;

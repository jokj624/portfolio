import Style from './Line.module.scss';

interface Props {
  direction: 'row' | 'col';
}

const Line = (props: Props) => {
  const { direction } = props;

  return <div className={Style[`Line--${direction}`]} />;
};

export default Line;

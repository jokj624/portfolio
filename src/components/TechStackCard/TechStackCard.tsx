import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from './TechStackCard.module.scss';

interface Props {
  title: string;
  icon: IconProp | JSX.Element;
}

const TechStackCard = (props: Props) => {
  const { title, icon } = props;

  return (
    <div className={Style.TechStackCard}>
      <div className={Style.TechStackCard__icon}>
        {title === 'Nest.js' && (icon as JSX.Element)}
        {title !== 'Nest.js' && <FontAwesomeIcon icon={icon as IconProp} />}
      </div>
      <div className={Style.TechStackCard__title}>{title}</div>
    </div>
  );
};

export default TechStackCard;

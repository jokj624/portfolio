import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faNodeJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { NestLogo } from '@/components/Common/NestLogo';

export const TECH_STACK_LIST: {
  [key: string]: IconProp | JSX.Element;
} = {
  'Node.js': faNodeJs,
  'Nest.js': <NestLogo />,
  React: faReact,
  AWS: faAws,
};

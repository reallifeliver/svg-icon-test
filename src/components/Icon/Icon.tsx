import * as React from 'react';
import * as icons from './svg';

type IconTypes = keyof typeof icons;
export const iconTypes: IconTypes[] = Object.keys(icons) as IconTypes[];
interface Props {
  icon: IconTypes,
  color?: string,
  size?:  '20px' | '30px' | '40px'
}

const Icon = ({icon, color, size = '30px'}: Props) => {
  const SVGIcon = icons[icon];
  return <SVGIcon style={{fill: color, width:size, height: 'auto'}}/>
}

export default Icon;
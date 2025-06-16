export type IconColor =
  | 'inherit'
  | 'primary'
  | 'primaryHover'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'black'
  | 'white';

export type SvgProps = React.SVGAttributes<SVGElement> & {
  /** `color` is not a CSS color property and will not accept HEX values - only use the specified string values */
  color?: IconColor;
};

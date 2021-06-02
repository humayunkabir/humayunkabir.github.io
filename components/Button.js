import Link from 'next/link';
import classNames from 'classnames';
import {
  colors,
  ringColors,
  borderColors,
  gradientColors,
  sizes,
} from '../resources/variables';

const Button = ({
  color = 'indigo',
  gradient = false,
  outline = false,
  ring = false,
  size = 'default',
  className,
  href,
  children,
  ...rest
}) => {
  const classes = classNames(
    className,
    'inline-block',
    'rounded',
    'font-bold',
    'uppercase',
    'tracking-wide',
    'text-center',
    'shadow-md',
    {
      [sizes[size]]: size,
      [ringColors[color]]: ring,
      [gradientColors[color]]: gradient,
      [colors[color]]: !gradient && !outline,
      [borderColors[color]]: outline,
    }
  );
  return href ? (
    <Link href={href} passHref {...rest}>
      <a className={classes}>{children}</a>
    </Link>
  ) : (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;

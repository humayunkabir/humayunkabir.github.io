import Link from 'next/link';
import classNames from 'classnames';

const gradientColors = {
  gray: 'bg-gradient-to-b from-gray-500 to-gray-700 text-white',
  red: 'bg-gradient-to-b from-red-500 to-red-700 text-white',
  yellow: 'bg-gradient-to-b from-yellow-500 to-yellow-700 text-white',
  green: 'bg-gradient-to-b from-green-500 to-green-700 text-white',
  blue: 'bg-gradient-to-b from-blue-500 to-blue-700 text-white',
  indigo: 'bg-gradient-to-b from-indigo-500 to-indigo-700 text-white',
  purple: 'bg-gradient-to-b from-purple-500 to-purple-700 text-white',
  pink: 'bg-gradient-to-b from-pink-500 to-pink-700 text-white',
};

const colors = {
  gray: 'bg-gray-600 text-white',
  red: 'bg-red-600 text-white',
  yellow: 'bg-yellow-600 text-white',
  green: 'bg-green-600 text-white',
  blue: 'bg-blue-600 text-white',
  indigo: 'bg-indigo-600 text-white',
  purple: 'bg-purple-600 text-white',
  pink: 'bg-pink-600 text-white',
};

const ringColors = {
  gray: 'focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-2 focus:ring-opacity-50',
  red: 'focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-offset-2 focus:ring-opacity-50',
  yellow:
    'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-opacity-50',
  green:
    'focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-opacity-50',
  blue: 'focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-opacity-50',
  indigo:
    'focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-opacity-50',
  purple:
    'focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 focus:ring-opacity-50',
  pink: 'focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 focus:ring-opacity-50',
};

const sizes = {
  sm: 'px-4 py-3 text-xs',
  default: 'px-5 py-4 text-xs',
  lg: 'px-6 py-5 text-xs',
};

const Button = ({
  color = 'indigo',
  gradient = false,
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
      [colors[color]]: !gradient,
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

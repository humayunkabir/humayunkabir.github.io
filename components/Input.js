import classNames from 'classnames';
import {
  borderColors,
  ringColors,
  gradientColors,
  sizes,
} from '../resources/variables';

const Button = ({
  label,
  color = 'indigo',
  gradient = false,
  ring = false,
  size = 'default',
  horizontal = false,
  className,
  id,
  ...rest
}) => {
  const classes = classNames(
    className,
    'inline-block',
    'rounded',
    'font-semibold',
    'shadow-md',
    'shadow-inner',
    {
      [sizes[size]]: size,
      [ringColors[color]]: ring,
      [gradientColors[color]]: gradient,
      [borderColors[color]]: !gradient,
    }
  );
  if (label) {
    return (
      <div
        className={classNames('flex', {
          'items-center': horizontal,
          'flex-col': !horizontal,
        })}
      >
        <label htmlFor={id} className="mr-3">
          {label}
        </label>
        <input id={id} className={classes} {...rest} />
      </div>
    );
  }

  return <input id={id} className={classes} {...rest} />;
};

export default Button;

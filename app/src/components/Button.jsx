import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, 'flex items-center px-4 py-2 border font-body font-medium transition-all duration-200 hover:scale-105', {
      // Primary - Warm amber (beer-inspired)
      'border-[#fbbf24] bg-[#fbbf24] text-[#2e2e2e] hover:bg-[#f59e0b]': primary && !outline,

      // Secondary - Deep chestnut brown (craft/artisanal)
      'border-[#8b5e3c] bg-[#8b5e3c] text-[#f5f3f0] hover:bg-[#6d4c41]': secondary && !outline,

      // Success - Muted sage green (grounded/hipster)
      'border-[#a3b18a] bg-[#a3b18a] text-[#2e2e2e] hover:bg-[#8fa876]': success && !outline,

      // Warning - Soft beige-tan
      'border-[#d9b99b] bg-[#d9b99b] text-[#2e2e2e] hover:bg-[#c9a876]': warning && !outline,

      // Danger - Keep a muted red that fits the palette
      'border-[#c17767] bg-[#c17767] text-[#f5f3f0] hover:bg-[#b86653]': danger && !outline,

      // Rounded corners
      'rounded-full': rounded,
      'rounded-lg': !rounded,

      // Outline styles
      'bg-transparent': outline,
      'text-[#fbbf24] hover:bg-[#fbbf24] hover:text-[#2e2e2e] transition-colors duration-200': outline && primary,
      'text-[#8b5e3c] hover:bg-[#8b5e3c] hover:text-[#f5f3f0] transition-colors duration-200': outline && secondary,
      'text-[#a3b18a] hover:bg-[#a3b18a] hover:text-[#2e2e2e] transition-colors duration-200': outline && success,
      'text-[#d9b99b] hover:bg-[#d9b99b] hover:text-[#2e2e2e] transition-colors duration-200': outline && warning,
      'text-[#c17767] hover:bg-[#c17767] hover:text-[#f5f3f0] transition-colors duration-200': outline && danger
    })
  );

  return <button {...rest} className={classes}>{children}</button>;
};

export default Button;
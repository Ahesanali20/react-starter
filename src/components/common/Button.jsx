const variantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-600',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-200',
  outline:
    'border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white disabled:hover:bg-transparent disabled:hover:text-blue-600',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  const buttonClassName = [
    'inline-flex items-center justify-center rounded-md border border-transparent font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

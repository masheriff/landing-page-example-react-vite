

interface ButtonProps {
    variant: "primary" | "secondary";
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: React.ReactNode;
  }

function Button(props: ButtonProps) {
    const { variant, size = 'md', fullWidth = false, children } = props;

    const variantClasses = (() => {
        switch (variant) {
          case 'primary':
            return 'bg-black hover:bg-gray-200 text-white hover:text-black focus:ring-black-500 uppercase';
          case 'secondary':
            return 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400';
          default:
            return 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500';
        }
      })();

      const sizeClasses = (() => {
        switch (size) {
          case 'sm':
            return 'text-sm px-3 py-2';
          case 'md':
            return 'text-base px-4 py-2';
          case 'lg':
            return 'text-lg px-6 py-3';
          default:
            return 'text-base px-4 py-2';
        }
      })();

      const widthClasses = fullWidth ? 'w-full' : '';

      const baseClasses = 'font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors hover:cursor-pointer';


    return (
      <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses}`}>
        {children}
      </button>
    );
  }
  
  export default Button;
  
import Link from 'next/Link';

const Button = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="px-4 py-3 text-xs inline-block rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-bold uppercase tracking-wide">
        {children}
      </a>
    </Link>
  );
};

export default Button;

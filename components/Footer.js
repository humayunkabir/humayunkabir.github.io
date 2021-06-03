import Link from 'next/link';
import { GiftIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <div className="container mx-auto py-4 border-t">
      <div className="grid grid-cols-2">
        <p>
          All rights reserved | Humayun Kabir &copy; {new Date().getFullYear()}
        </p>
        <div className="ml-auto">
          <Link href="#!" passHref>
            <a>
              <GiftIcon className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

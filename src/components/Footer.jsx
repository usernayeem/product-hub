import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              ProductHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Your trusted marketplace for discovering and managing amazing
              products.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
                href="/auth/signin"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
              Contact
            </h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <HiMail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@producthub.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <HiPhone className="h-4 w-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 ProductHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

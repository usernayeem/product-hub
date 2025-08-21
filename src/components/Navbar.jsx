"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path) => {
    return `py-2 transition-colors ${
      isActive(path)
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    }`;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            ProductHub
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/products" className={getLinkClasses("/products")}>
              Products
            </Link>

            {status === "loading" ? (
              <div className="text-gray-600 dark:text-gray-400">Loading...</div>
            ) : session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard/add-product"
                  className={getLinkClasses("/dashboard")}
                >
                  Add Product
                </Link>
                <span className="text-gray-700 dark:text-gray-300 italic">
                  Hi, {session.user.name}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-600 dark:bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-700 dark:hover:bg-red-800 text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/auth/signin"
                  className={getLinkClasses("/auth/signin")}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 text-sm font-medium transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={getLinkClasses("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={getLinkClasses("/products")}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              {status === "loading" ? (
                <div className="text-gray-600 dark:text-gray-400">
                  Loading...
                </div>
              ) : session ? (
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/dashboard/add-product"
                    className={getLinkClasses("/dashboard")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Add Product
                  </Link>
                  <span className="text-gray-700 dark:text-gray-300">
                    Hi, {session.user.name}
                  </span>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      signOut({ callbackUrl: "/" });
                    }}
                    className="bg-red-600 dark:bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-700 dark:hover:bg-red-800 text-sm text-center font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/auth/signin"
                    className={`${getLinkClasses("/auth/signin")} text-center`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 text-sm text-center font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

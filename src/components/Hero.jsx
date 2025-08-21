"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  HiArrowRight,
  HiSparkles,
  HiShoppingBag,
  HiStar,
} from "react-icons/hi";

const Hero = () => {
  const { data: session, status } = useSession();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-8 px-4 overflow-hidden md:h-[calc(100vh-64px)] md:flex md:items-center lg:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGY5ZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZjI5MzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
            <HiSparkles className="mr-2 h-4 w-4" />
            Discover Premium Products
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              Product
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium products designed to
            enhance your lifestyle. Quality, innovation, and style in every
            purchase.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/products"
              className="bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <HiShoppingBag className="mr-2 h-5 w-5" />
              Browse Products
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Link>

            {!session && (
              <Link
                href="/auth/signup"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-10 py-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-xl inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;

"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-gray-800">
        <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Home size={18} />
          Go back home
        </Link>
      </div>
  );
}

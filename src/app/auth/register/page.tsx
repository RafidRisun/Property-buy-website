"use client";
import { AuthMethods } from "@/src/components/AuthMethods";
import { useState } from "react";
import { iconShowPassword, iconHidePassword } from "@/public/icons/icon";
import Link from "next/link";
import { iconMailPhone } from "@/public/icons/icon";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center gap-4  w-90 sm:w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-general text-black text-3xl font-semibold">
          Create New Account
        </p>
        <p className="font-general text-black text-sm">
          Let&apos;s create an account to grab amazing deals
        </p>
      </div>
      <AuthMethods />
      <button className="text-gray-600 font-general flex py-3 w-full items-center justify-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer">
        <span dangerouslySetInnerHTML={{ __html: iconMailPhone }} />
        Continue with Google
      </button>
      <div>
        <p className="text-sm text-gray-600 font-general">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-theme-color hover:underline font-general"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

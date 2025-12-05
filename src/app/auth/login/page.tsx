"use client";
import { AuthMethods } from "@/src/components/AuthMethods";
import { useState } from "react";
import { iconShowPassword, iconHidePassword } from "@/public/icons/icon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-general text-black text-3xl font-semibold">
          Welcome Back
        </p>
        <p className="font-general text-black text-sm">
          Let&apos;s login to grab amazing deals
        </p>
      </div>
      <AuthMethods />
      {/* Separator */}
      <div className="flex flex-row items-center justify-center gap-4 w-full">
        <hr className="border-gray-300 w-full" />
        <span className="text-gray-500 font-general text-sm">Or</span>
        <hr className="border-gray-300 w-full" />
      </div>
      {/* Email and Password Form */}
      <form className="flex flex-col items-center justify-center gap-4 w-full">
        <div className="w-full relative">
          <input
            type="email"
            className="w-full bg-gray-100 rounded-lg px-2 pt-6 pb-2 font-general text-black focus:outline-none"
          />
          <label
            htmlFor="email"
            className="absolute top-2 left-2 text-xs text-gray-500"
          >
            Email
          </label>
        </div>
        <div className="w-full">
          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-gray-100 rounded-lg px-2 pt-6 pb-2 font-general text-black focus:outline-none"
            />
            <label
              htmlFor="password"
              className="absolute top-2 left-2 text-xs text-gray-500"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <span dangerouslySetInnerHTML={{ __html: iconHidePassword }} />
              ) : (
                <span dangerouslySetInnerHTML={{ __html: iconShowPassword }} />
              )}
            </button>
          </div>
          <div className="flex flex-row w-full justify-between py-2">
            <div className="flex flex-row items-baseline gap-2">
              <input id="rememberMe" type="checkbox" className="mt-2" />
              <label className="text-sm text-gray-600 font-general">
                Remember Me
              </label>
            </div>
            <Link
              href="#"
              className="text-sm text-theme-color font-general hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-theme-color hover:bg-theme-color-focused text-white rounded-lg py-3 font-general cursor-pointer"
          onClick={() => router.replace("/")}
        >
          Log In
        </button>
      </form>
      <div>
        <p className="text-sm text-gray-600 font-general">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-theme-color hover:underline font-general"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";
import { AuthMethods } from "@/src/components/AuthMethods";
import { useState } from "react";
import { iconShowPassword, iconHidePassword } from "@/public/icons/icon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik } from "formik";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-90 sm:w-full">
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
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) errors.email = "Required";
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          )
            errors.email = "Invalid email";
          if (!values.password) errors.password = "Required";
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            router.replace("/main/buy");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4 w-full"
          >
            {/* Email field */}
            <div className="w-full relative">
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-gray-100 rounded-lg px-2 pt-6 pb-2 font-general text-black focus:outline-none"
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-2 text-xs text-gray-500"
              >
                Email
              </label>
              {touched.email && errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div className="w-full">
              <div className="w-full relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                    <span
                      dangerouslySetInnerHTML={{ __html: iconHidePassword }}
                    />
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{ __html: iconShowPassword }}
                    />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}

              {/* Remember + Forgot */}
              <div className="flex flex-row w-full justify-between py-2">
                <label className="flex flex-row items-center gap-2 text-sm text-gray-600 font-general">
                  <input id="rememberMe" type="checkbox" className="mt-0.5" />
                  Remember Me
                </label>
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </Formik>

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

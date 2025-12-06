import { WiztecLogo } from "@/src/components/WiztecLogo";
import Image from "next/image";

export const metadata = {
  title: "Log In - WiztecBD-task",
  description: "Log in to your WiztecBD account.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-center min-h-screen bg-white p-12">
      <div className="flex items-center justify-center p-10">
        <div className="flex flex-col items-center justify-center gap-6 w-140 h-full p-8">
          <WiztecLogo />
          {children}
        </div>
      </div>

      <div className="hidden lg:block w-180 relative">
        <Image
          src="/images/authPhoto.png"
          alt="Authentication Illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

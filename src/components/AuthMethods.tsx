import Image from "next/image";

export function AuthMethods() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <button className="text-gray-600 font-general flex py-3 w-full items-center justify-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Image
          src="/images/google.png"
          alt="Google Icon"
          width={18}
          height={18}
        />
        Continue with Google
      </button>
      <button className="text-gray-600 font-general flex py-3 w-full items-center justify-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Image
          src="/images/apple.png"
          alt="Apple Icon"
          width={18}
          height={18}
        />
        Continue with Apple
      </button>
    </div>
  );
}

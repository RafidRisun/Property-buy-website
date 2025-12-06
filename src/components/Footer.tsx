import {
  iconFacebook,
  iconInstagram,
  iconThread,
  iconTiktok,
  iconWhatsapp,
  iconX,
} from "@/public/icons/icon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-linear-to-t from-[#42233A] to-[#251621] w-full rounded-t-3xl">
      <div className="flex flex-row items-start justify-between p-12 text-white">
        <div className="flex flex-col gap-4">
          <h3 className="font-general font-medium text-lg">About Us</h3>
          <Link href="/about" className="font-general text-sm hover:underline">
            Resources
          </Link>
          <Link href="/about" className="font-general text-sm hover:underline">
            Company
          </Link>
          <Link href="/about" className="font-general text-sm hover:underline">
            Property
          </Link>
          <Link href="/about" className="font-general text-sm hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-general font-medium text-lg">Contact Us</h3>
          <Link href="/about" className="font-general text-sm hover:underline">
            hello.abc@gmail.com
          </Link>
          <Link href="/about" className="font-general text-sm hover:underline">
            +880123456789
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-general font-medium text-lg">Follow Us</h3>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <Link href="https://www.facebook.com">
              <span dangerouslySetInnerHTML={{ __html: iconFacebook }} />
            </Link>
            <Link href="https://www.x.com">
              <span dangerouslySetInnerHTML={{ __html: iconX }} />
            </Link>
            <Link href="https://www.instagram.com">
              <span dangerouslySetInnerHTML={{ __html: iconInstagram }} />
            </Link>
            <Link href="https://www.whatsapp.com">
              <span dangerouslySetInnerHTML={{ __html: iconWhatsapp }} />
            </Link>
            <Link href="https://www.thread.com">
              <span dangerouslySetInnerHTML={{ __html: iconThread }} />
            </Link>
            <Link href="https://www.tiktok.com">
              <span dangerouslySetInnerHTML={{ __html: iconTiktok }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end w-full px-10">
        <span>© 2025 Havenix. All rights reserved.</span>
      </div>
      <div className="relative flex items-center justify-center w-full h-90 px-4">
        <Image
          src={"/images/WiztecBD.png"}
          alt="WiztecBD Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

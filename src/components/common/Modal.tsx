import { iconClose } from "@/public/icons/icon";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl rounded-xl bg-white p-4 shadow-xl">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F4F6F8] absolute right-[-10] top-[-10] z-50 cursor-pointer"
          onClick={onClose}
        >
          <span dangerouslySetInnerHTML={{ __html: iconClose }} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

import { logo } from "@/public/icons/icon";

export function WiztecLogo() {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div dangerouslySetInnerHTML={{ __html: logo }} />
      <p className="font-alexandria font-semibold text-[#6C0443] text-2xl">
        WiztecBD
      </p>
    </div>
  );
}

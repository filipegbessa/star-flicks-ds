import { IconsType } from "@/types";
import { SFButton } from "../SFButton/SFButton";

export interface SFHeaderProps {
  name: IconsType;
}

export const SFHeader = () => {
  return (
  <header className="flex justify-between px-5">
    <div className="logo">logo</div>

    <div className="flex justify-between gap-2">
      <div>
        <SFButton />
      </div>
      <div>sing in</div>
      <div>sing up</div>
    </div>
  </header>
  );
};

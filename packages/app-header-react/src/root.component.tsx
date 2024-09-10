import { IconBrandReact } from "@tabler/icons-react";

import "./header.css";

export default function Root(props) {
  console.log(props);
  return (
    <header
      className={
        "h-[52px] bg-[#004bab] px-8 text-white flex gap-2 justify-center items-center drop-shadow-md"
      }
    >
      <IconBrandReact size={28} />
      <h2 className={"text-2xl text-center"}>React Header</h2>
    </header>
  );
}

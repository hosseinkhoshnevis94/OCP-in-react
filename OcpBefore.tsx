import React from "react";
import { CiZoomIn, CiZoomOut, CiSearch } from "react-icons/ci";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: "back" | "forward" | "search" | "zoomIn" | "zoomOut";
}

const OcpBefore: React.FC<IButtonProps> = ({ text = "click", role = "search", ...props }) => {
  const icons = {
    back: <HiOutlineArrowNarrowLeft />,
    forward: <HiOutlineArrowNarrowRight />,
    search: <CiSearch />,
    zoomIn: <CiZoomIn />,
    zoomOut: <CiZoomOut />,
  };

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...props}
    >
      {text}
      <div className="m-2">{icons[role]}</div>
    </button>
  );
};

export default OcpBefore;

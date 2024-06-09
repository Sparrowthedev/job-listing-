"use client";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  const buttons = [
    { id: 1, label: "Jobs", icon: <WorkOutlineIcon /> },
    { id: 2, label: "Messages", icon: <MarkChatUnreadOutlinedIcon /> },
    { id: 3, label: "Applicants", icon: <PeopleOutlineOutlinedIcon /> },
    { id: 4, label: "matches", icon: <PermIdentityOutlinedIcon /> },
  ];

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <div className="px-7 py-4 shadow-md bg-white">
      <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
        <div className="bg-[#e8e8e8] text-center p-3 rounded-sm">
          <a href="#" className="text-[#bf5c40] font-bold">Logo</a>
        </div>
        <div className="flex items-center gap-1 p-1 bg-[#f6f6f6] rounded-[25px]">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`p-3 ${
                activeButton === button.id ? "bg-[#bf5c40] rounded-3xl text-white" : "bg-transparent"
              } flex items-center gap-2`}
            >
              {button.icon} {button.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
            <NotificationsNoneOutlinedIcon />
            <div className="flex items-center gap-1">
                <Image 
                src='/download.jpeg'
                height={40}
                width={40}
                alt="A logo"
                className="rounded-full"
                />
                <ExpandMoreOutlinedIcon />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

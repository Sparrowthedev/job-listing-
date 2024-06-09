"use client";
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const SearchBar = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  const buttons = [
    { id: 1, label: "Active" },
    { id: 2, label: "Draft" },
  ];

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <div className="mx-6 my-4">
      <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-[#ededed] rounded-[10px]">
                {buttons.map((button) => (
                    <button
                    key={button.id}
                    onClick={() => handleButtonClick(button.id)}
                    className={`p-2 w-[150px] ${
                      activeButton === button.id ? "bg-white rounded-[10px] text-black" : "bg-transparent text-[#d5d3d3]"
                    }`}
                    >{button.label}</button>
                ))}
            </div>
            <div className="flex items-center gap-1">
                <SearchOutlinedIcon className="text-[#7b7979]"/> <p className="text-[#7b7979]">Search from job postings</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
            <Inventory2OutlinedIcon className="text-[#7b7979]"/>
                <FilterAltOutlinedIcon className="text-[#7b7979]"/>
            </div>
            <button className="flex items-center bg-[#bf5c40] px-3 py-2 rounded-[10px] text-white">
                <AddOutlinedIcon /> Create a new job
            </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

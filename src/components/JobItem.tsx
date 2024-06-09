import { Detail } from "@/types";
import Image from "next/image";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

interface JobListProps {
  details: Detail[];
}

const JobItem: React.FC<JobListProps> = ({ details }) => {
  return (
    <>
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex items-center mb-3 px-4 py-4 justify-between bg-white shadow-md rounded-[15px]"
        >
          <div className="flex items-center gap-6 w-[65%]">
            <div className="w-[50px] h-[50px]">
              <img
                src={detail.img}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-[#7b7979]">Role</p>
              <h3>{detail.role}</h3>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-[#7b7979]">Pay</p>
              <h3>{detail.pay}</h3>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-[#7b7979]">Location</p>
              <h3>{detail.location}</h3>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-[#7b7979]">Skills</p>
              <div className="flex flex-wrap items-center gap-2">
                {detail.skills.map((skill, index) => (
                  <Image
                    key={index}
                    src={skill}
                    width={20}
                    height={20}
                    alt="skills"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-end">
              <MoreVertOutlinedIcon />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[#7b7979]">
                <PeopleOutlineOutlinedIcon /> <p>{detail.applicants}</p>
              </div>
              <div className="flex items-center gap-1 text-[#7b7979]">
                <PermIdentityOutlinedIcon /> <p>{detail.matches}</p>
              </div>
              <div className="flex items-center gap-1 text-[#7b7979]">
                <RemoveRedEyeOutlinedIcon /> <p>{detail.views}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobItem;

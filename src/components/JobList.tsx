import { details } from "@/utilities";
import JobItem from "./JobItem";

const Joblist = () => {
  return (
    <div className="mx-7 mb-7">
      <div className="max-w-7xl my-0 mx-auto">
        <JobItem details={details} />
      </div>
    </div>
  );
};

export default Joblist;

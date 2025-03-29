import React from "react";
import { MdBlockFlipped } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

const UserBlock = (user) => {
  return (
    <div className="text-gray-500 items-center px-6 text-lg py-3.5 grid grid-cols-6">
      <p className="font-semibold text-gray-800">{user?.about?.name}</p>
      <p className="text-center">{user?.about?.email}</p>
      <p className="text-center">
        {new Date(user?.details?.date).toUTCString()?.slice(4, 16)}
      </p>
      <p className="text-center">{user?.details?.invitedBy}</p>
      <p className={`text-center mx-auto ${user?.about?.status}`}>
        {user?.about?.status}
      </p>
      <div className="flex items-center justify-center gap-x-5">
        <MdBlockFlipped className="text-red-500 border-2 p-1.5 text-[40px] bg-red-500/10 rounded-md border-red-500" />
        <IoCheckmark className="text-newGreen border-2 p-1.5 text-[40px] bg-newGreen/10 rounded-md border-newGreen" />
        <CiCircleInfo className="text-gray-500 border-2 p-1.5 text-[40px] bg-gray-500/10 rounded-md border-gray-500" />
      </div>
    </div>
  );
};
export default UserBlock;

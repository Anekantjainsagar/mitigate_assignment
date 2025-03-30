import { useContext } from "react";
import { HiOutlineLink } from "react-icons/hi2";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserForbidFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import Context from "../Context/Context";

const Stats = () => {
  let { getInsights } = useContext(Context);
  let insights = getInsights();

  const statsData = [
    {
      text: "Total Users",
      value: insights.totalUsers,
      icon: <HiMiniUserGroup className="statsIconStyle" />,
      link: "https://example.com",
    },
    {
      text: "Active Users",
      value: insights.activeUsers,
      icon: <RiUserFollowFill className="statsIconStyle" />,
      link: "https://example.com",
    },
    {
      text: "Inactive Users",
      value: Math.round(insights.inactiveUsers * 100) + "%",
      icon: <RiUserUnfollowFill className="statsIconStyle" />,
      link: "https://example.com",
    },
    {
      text: "Blocked Users",
      value: Math.round(insights.blockedUsers * 100) + "%",
      icon: <RiUserForbidFill className="statsIconStyle" />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-8 my-6">
      {statsData?.map((data, idx) => {
        return <StatCard key={idx} {...data} />;
      })}
    </div>
  );
};

const StatCard = ({ text, value, icon, link }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200/80 flex justify-between p-5">
      <div className="flex gap-x-5">
        {icon}
        <div>
          <h6 className="text-gray-600 text-lg">{text}</h6>
          <p className="text-5xl mt-1 font-semibold">{value}</p>
        </div>
      </div>
      {link && <HiOutlineLink className="text-gray-600" />}
    </div>
  );
};

export default Stats;

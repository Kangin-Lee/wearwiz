import React from "react";
import Notice from "./Notice";
import Event from "./Event";
import QnA from "./QnA";

const Announcement: React.FC = () => {
  return (
    <div className="grid grid-cols-[6fr_4fr_3fr] gap-4 my-10">
      <Notice />
      <Event />
      <QnA />
    </div>
  );
};

export default Announcement;

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React from "react";

export const cardDetail = [
  {
    title: "EARNINGS (MONTHLY)",
    value: "$40,000",
    icon: <DateRangeIcon sx={{ color: "#dddfeb", fontSize: "2.5rem" }} />,
    borderColor: "#4e73df"
  },
  {
    title: " EARNINGS (ANNUAL)",
    value: "$215,000",
    icon: <AttachMoneyOutlinedIcon sx={{ color: "#dddfeb", fontSize: "2.5rem" }} />,
    borderColor: "#1cc88a"
  },
  {
    title: "TASKS",
    value: <div className="slider-div"> <span>50%</span>
      <progress value="50" max="100" className="task-progress"> </progress>
    </div>,
    icon: <AssignmentOutlinedIcon sx={{ color: "#dddfeb", fontSize: "2.5rem" }} />,
    borderColor: "#36b9cc"
  },
  {
    title: "PENDING REQUESTS",
    value: "18",
    icon: <ChatIcon sx={{ color: "#dddfeb", fontSize: "2.5rem" }} />,
    borderColor: "#f6c23e"
  }
];

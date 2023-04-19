import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineStock, AiOutlineBarChart } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";

export const links = [
  {
    title: "Pages",
    links: [
      {
        name: "data-table",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
    ],
  },
];

import React, { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { LineChart } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { earningData } from "../data/dummy";
import useData from "../hooks/useData";
import { fetchSummaryStatistics } from "../api/api";

const DashBoard = () => {
  const { currentColor, currentMode } = useStateContext();
  const { data, isLoading, error } = useData(
    "932561105d21a54d3d1d2a941164ffec321cd76b"
  );

  const [revenue, setRevenue] = useState(null);
  const [spend, setSpend] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryStats = await fetchSummaryStatistics();
        setRevenue(summaryStats.revenue);
        setSpend(summaryStats.spend);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-24 px-4">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white darg:text-gray-500 dark:bg-secondary-dark-bg shadow-2xl h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Revenue</p>
              <p className="text-2xl">{revenue ? `$${revenue}` : "-"}</p>
            </div>
            <button
              type="button"
              style={{ background: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center items-center gap-6">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg shadow-2xl md:w-56 p-4 pt-9 rounded-xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg shadow-2xl p-4 rounded-2xl col-span-2">
          <p className="font-semibold text-xl text-center">Revenue Updates</p>
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Attributed Conversions</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Attributed Revenue</span>
              </p>
              <p className="flex items-center gap-2 text-blue-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Spend</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1 5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
            </div>
            <div>
              <LineChart
                currentMode={currentMode}
                data={data}
                width="350px"
                height="360px"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg shadow-2xl rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Spend</p>
                <p className="text-2xl"> {spend ? `$${spend}` : "-"}</p>
                <p className="text-gray-200">
                  Total spend on advertising for this source/target
                </p>
              </div>
              <button
                type="button"
                style={{ background: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg shadow-2xl rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Revenue</p>
                <p className="text-2xl"> {revenue ? `$${revenue}` : "-"} </p>
                <p className="text-gray-200">
                  Total revenue attributed to advertising
                </p>
              </div>
              <button
                type="button"
                style={{ background: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CategoryTabCard from "./CategoryTabCard";
// import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("T-Rex");

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-navy.vercel.app/allToysByCategory/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data);
      });
  }, [activeTab]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div>
        <h1 className=" text-center text-6xl font-bold mt-20 mb-8 tracking-wide">
          Explore Marketplace
        </h1>
        <p className=" text-center text-3xl text-gray-500 mb-20">
          Various kind of favorite dinosaur toys that can have coming <br />{" "}
          soon with their best shape .
        </p>
      </div>
      <Tabs>
        <TabList>
          <div className="flex justify-center items-center gap-6 mt-10">
            <Tab>
              <button
                onClick={() => handleTab("T-Rex")}
                className="btn btn-accent rounded-full"
              >
                T-Rex Dinosaur
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleTab("Daspletosaurus")}
                className="btn btn-accent rounded-full"
              >
                Daspletosaurus
              </button>
            </Tab>
            <Tab>
              <button
                onClick={() => handleTab("Armored Triceratops")}
                className="btn btn-accent rounded-full"
              >
                Armored <br /> Triceratops
              </button>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            {toys.map((toy) => (
              <CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            {toys.map((toy) => (
              <CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            {toys.map((toy) => (
              <CategoryTabCard key={toy._id} toy={toy}></CategoryTabCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;

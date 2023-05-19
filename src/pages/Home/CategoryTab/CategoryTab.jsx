import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
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
              <button className="btn btn-accent rounded-full">
                T-Rex Dinosaur
              </button>
            </Tab>
            <Tab>
              <button className="btn btn-accent rounded-full">
                Daspletosaurus
              </button>
            </Tab>
            <Tab>
              <button className="btn btn-accent rounded-full">
                Armored <br /> Triceratops
              </button>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card card-compact w-96 bg-base-100 shadow-xl mt-20">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;

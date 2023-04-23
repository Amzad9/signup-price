import React, { useState } from "react";
import Nav from "../components/Nav";
import Switch from "../components/Switch";
import Card from "../components/Card";

function Price() {
    const [price,setPrice] = useState(false);

    const switchHandle = () => {
        setPrice(!price)
    }
    let BasicPlan = ["All features in Basic","Flexible call scheduling", "15 TB cloud storage"]
    let Professionsalplan = ["All features in Basic","Flexible call scheduling", "21 TB cloud storage"]
    let masterPlan = ["All features in Basic","Flexible call scheduling", "35 TB cloud storage"]
  return (
    <div className="container px-20 mx-auto pt-12">
      <div className="mb-10 md:mb-16">
        <h1 className=" text-3xl font-bold text-gray-700 text-center mb-12">Our Pricing</h1>
        <div className="flex items-center justify-center gap-8 mb-8">
          <span className=" text-base font-semibold">Annually</span>
          <Switch handleChange={switchHandle}/>
          <span className=" text-base font-semibold">Monthly</span>
        </div>
      </div>
      <div className="flex flex-col px-28 mb-10 justify-between items-center lg:flex-row">
        <Card
            btnTitle="Choose Plan"
            price={price ? "19.99" : "21.99"}
            title="Basic"
            list={BasicPlan}
            className=""
            classTitle=""
        />
        <Card
            btnTitle="Choose Plan"
            price={price ? '24.99' : '29.99'}
            title="Professionsal"
            list={Professionsalplan}
            className="py-16 bg-fuchsia-400"
            classTitle="text-white"
            btnClass="bg-white text-dark"
            listClass="text-white"
        />
        <Card
            btnTitle="Choose Plan"
            price={price ? '39.99' : '49.99'}
            title="Master"
            list={masterPlan}
        />
      </div>
    </div>
  );
}

export default Price;

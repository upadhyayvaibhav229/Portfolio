import React from "react";
import icons from '../assets/img/arrow.png'

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Frontend",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "img/righr-up.png",
    },
    {
      id: 2,
      title: "App Dev.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: {icons},
    },
    {
      id: 3,
      title: "Backend",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "img/righr-up.png",
    },
    {
      id: 4,
      title: "Database",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "img/arrow.png",
    },
    {
      id: 6,
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "img/righr-up.png",
    },
  ];

  return (
    <>
    <hr className="dark:hidden" />
      
    <section
      className="h-auto w-full p-5 dark:bg-slate-900 dark:text-white"
      id="services"
    >
      {/* Section Header */}
      <div className="text-black dark:text-white space-y-4 text-center">
        <h1 className="text-black dark:text-white text-3xl  font-bold">
          Popular Services
        </h1>
        <p className="text-black dark:text-white text-2xl leading-relaxed">
          My <span className="text-yellow-500">Special Service</span> For your
          <br />
          Frontend & Backend Dev.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto p-5">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
    </>
  );
};

const ServiceCard = ({ id, title, description, icon }) => (
  <div className="flex items-center justify-between bg-zinc-800 rounded-2xl p-4 shadow-lg">
    <div>
      <h2 className="text-black font-bold text-lg">
        {id < 10 ? `0${id}` : id}.{" "}
        <span className="text-yellow-500">{title}</span>
      </h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <div>
      <img className="w-10 h-10" src={icons} alt={`${icon} Icon`} />
    </div>
  </div>
);

export default Service;

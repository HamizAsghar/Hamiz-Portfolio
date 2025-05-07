import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px]"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="I help plan smart moves for business, using what we know about the market to grow and succeed."
         
        />
        <Card
          title="App Development"
          des="I build apps that work just the way user want them to, making sure they're easy to use on any device."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="I make sure website shows up when people search online, bringing more visitors to site."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I create apps for phones and tablets that are fun to use and work smoothly every time."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="I design websites and apps that are easy and enjoyable to use, so people keep coming back."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I keep website safe and running smoothly on the internet, so customers can always find user."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features
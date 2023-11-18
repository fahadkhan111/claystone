import React from "react";
import WhyChooseUs from "../../components/whyChooseUs";
import Hero from "../../components/hero";
import Blog from "../../components/blog";
import ClientsStories from "../../components/clients-stories";
import Projects from "../../components/projects";
import AskQuestions from "../../components/qna";
import Service from "../../components/services";
import OurWork from "../../components/our-work";
import ItSolutions from "../../components/itSolutions";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurWork />
      <ClientsStories />
      <Service />
      <Projects />
      <AskQuestions />
      <Blog />
      <ItSolutions />
    </>
  );
};

export default Home;

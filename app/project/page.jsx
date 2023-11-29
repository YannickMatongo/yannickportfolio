"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react JS",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/4.png",
    category: "symfony",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/2.png",
    category: "react JS",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/1.png",
    category: "symfony",
    name: "Evovle Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/3.png",
    category: "react JS",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/4.png",
    category: "symfony",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, similique.",
    link: "/",
    github: "https://github.com/YannickMatongo",
  },
];

// remove Category duplicates
const uniqueCategories = [
  "Tous les projets",
  ...new Set(projectData.map((item) => item.category)),
];

const projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("tous les projets");

  const filteredProjects = projectData.filter((project) => {
    //if category is 'all project' return all projects, else filter by category
    return category === "Tous les projets"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title xl:mb-16 text-center mx-auto mb-12 md:border-none dark:border-none">
          Mes Projets
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default projects;

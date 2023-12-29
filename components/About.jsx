import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yannick Matongo",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+33659265310",
  },
  {
    icon: <MailIcon size={20} />,
    text: "yannick.matongo03@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Né le 21 juillet, 1987",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Licence Developpeur Application",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "45 rue Albert Moreau, 77000, Melun",
  },
];

const qualificationData = [
  {
    title: "formation",
    data: [
      {
        university: "Doranco",
        qualification: "Licence Developpeur Application",
        years: "2022 - 2023",
      },
      {
        university: "Doranco",
        qualification: "Developpeur Web et Mobile",
        years: "2021 - 2022",
      },
      {
        university: "Mkup",
        qualification: "Management",
        years: "2018 - 2019",
      },
      {
        university: "Faculté de Créteil",
        qualification: "Licence Administration et Echange Internationaux",
        years: "2010 - 2014",
      },
      {
        university: "Antonin Carême",
        qualification:
          "Baccalauréat Professionnel du Metier De La Comptabilité ",
        years: "2006 - 2008",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Cote Fjord",
        role: "Developpeur Web et Mobile",
        years: "2022 - 2023",
      },
      {
        company: "Black Pixel",
        role: "Developpeur Web et Mobile",
        years: "2020 - 2022",
      },
      {
        company: "Tata steel",
        role: "Attache Commercial",
        years: "2019 - 2020",
      },
      {
        company: "Forever 21",
        role: "Manager",
        years: "2014 - 2018",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, React, Bootstrap Tailwind, Javascript,",
      },
      {
        name: "Front-end Developpement",
      },
      {
        name: " Symfony, PHP, Java, JavaFx, SpringBoot, MySql, H2",
      },
      {
        name: "Back-End Developpement",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/trello.png",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          A propos de moi
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer2.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-162px xl:w-auto" value="personal">
                  Information
                </TabsTrigger>
                <TabsTrigger
                  className="w-162px xl:w-auto"
                  value="qualifications"
                >
                  Parcours
                </TabsTrigger>
                <TabsTrigger className="w-162px xl:w-auto" value="skills">
                  Compétences
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Concepteur développeur qui fera de vos projets un succès
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Développeur Full Stack doté d'une passion pour
                      l'innovation, je suis déterminé à créer des expériences
                      numériques exceptionnelles sur les plateformes web et
                      mobile. Mon expertise pour le front-end et back-end, me
                      permettant d'offrir des solutions adaptées aux besoins
                      spécifiques de chaque projet.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div>Langue</div>
                      <div className="border-b border-border"></div>
                      <div>Français, Anglais, Espagnole</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Mon parcours
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border leading-none ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-non mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "formation").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "formation").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border leading-none ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-non mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills - Compétences */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      les outils que j'utilise au quotidien
                    </h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Compétences
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/3 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-cl font-semibold mb-2 xl:text-left">
                        Les Outils
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";
import React from "react";
import car from "@../../public/carshop.png";
import music from "@../../public/music.png";
import space from "@../../public/space.png";
import amzone from "@../../public/amzon.png"
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div
        className="max-w-[1240px] mx-auto px-2 py-16"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h1 className="uppercase text-[#5651e5]">Projects</h1>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Car Shop"
            backgroundImg={car}
            projectUrl="https://cars-shop-8urw.vercel.app/?fbclid=IwAR33gfLqQlEo3hJNc1zih51DToEhCmASnClUvNH8jioLB6B7UdbYP7AUX5Q"
            projectCode="https://github.com/hossam556k/cars_shop"
            tachnology="Next.js , taliwand, rapidapi"

          />
          <ProjectItem
            title="Music"
            backgroundImg={music}
            projectUrl="https://hossam536.netlify.app/?fbclid=IwAR01hrNJ56LeXr7TFjCsMYjCTqLO9VdESeu0SjslDHRf-rmNJ3FAjhKfiYA"
            projectCode="https://github.com/hossam556k/musicApp"
            tachnology="React.js , taliwand, rapidapi"


          />
          <ProjectItem
            title="Space app"
            backgroundImg={space}
            projectUrl="https://space-app-one.vercel.app/?fbclid=IwAR2g2WX96ZOQbTYIGp78_7QozEwXB4_a87YwPzR1bIZKmCHUq8sPqA5DRGo"
            projectCode="https://github.com/hossam556k/spaceAPP"
            tachnology="React.js , taliwand, rapidapi"


          />
          <ProjectItem
            title="Amzone"
            backgroundImg={amzone}
            projectUrl="https://clone-dffaf.web.app/"
            projectCode="https://github.com/hossam556k/amzone"
            tachnology="React.js , firebase, notResponsive"


            
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

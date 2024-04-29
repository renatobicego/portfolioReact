import { Backdrop } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const urlProjects = [
  {
    href: "https://dutsiland.com",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fopengraph-image.png?alt=media&token=ed6ba61f-c4b8-41b8-a2df-81dfe2fef247",
    altText: "Estudio Dutsiland link to project",
    title: "Estudio Dutsiland",
    fields: ["Frontend", "WebGL / Creative Development"],
  },
  {
    href: "https://www.behance.net/gallery/159419807/Pole-Vault",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fpolevault.png?alt=media&token=c169a5fb-d9b9-4bd0-8a94-5531d3adcac8",
    altText: "Pole vault app link to project",
    title: "Pole Vault App",
    fields: ["UX Research", "Web / Mobile UI Design"],
  },
  {
    href: "https://www.behance.net/gallery/177706795/Asociacion-Mendocina-de-Atletismo",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fportada.png?alt=media&token=71489274-3ea4-42ec-b189-88187835323f",
    altText: "Asociación Mendocina de atletismo project",
    title: "Asociación Mendocina de Atletismo",
    fields: ["Full Stack Development"],
  },
  {
    href: "https://mimpronta.com",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fmimpronta.png?alt=media&token=f56b4b7e-df3b-407f-8956-ce5044fd8307",
    altText: "Mimpronta project",
    title: "Mimpronta",
    fields: ["Full Stack Development"],
  },
  {
    href: "https://www.behance.net/gallery/154143359/Retrato",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fretrato.png?alt=media&token=c31c2f02-3fe3-4699-ae25-06a98ba29aa7",
    altText: "Retrato app link to project",
    title: "Retrato",
    fields: ["UX Research", "Mobile UI Design"],
  },
  {
    href: "http://wonderventures3.s3-website-us-east-1.amazonaws.com/",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2Fwonder.png?alt=media&token=7c346b64-638c-4a14-97cd-8c0739619d76",
    altText: "Wonder ventures link to project",
    title: "Wonder Ventures",
    fields: ["Full Stack Development", "Web UI Design"],
  },
  {
    href: "https://fender-pj-bass-renatobicego.vercel.app/",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/projects%2FfenderPJ.png?alt=media&token=03768b12-32a0-432a-be96-f482709fcf97",
    altText: "Fender bass landing page link to project",
    title: "Fender PJ Landing Page",
    fields: ["Frontend", "WebGL / Creative Development"],
  },
];
const DesignDev = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <section className="sectionContainer">
      <h3 className="title text-right">
        Design & <br className="2xl:hidden"/> Development
      </h3>
      <button onClick={handleOpen} className="btn-section">
        Projects
      </button>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 1300,
          backdropFilter: "blur(3px)"
        }}
        open={open}
        onClick={handleClose}
      >
        <button
          onClick={handleClose}
          className="fixed top-[25%] right-[9%] md:right-[7%] lg:right-[5.5%] z-[101]"
        >
          <img
            className="w-6"
            src="img/icons/close.svg"
            alt="Close section icon"
          />
        </button>
        <div
          className="rounded-lg bg-[#22222280] w-11/12 h-[58vh] overflow-x-scroll flex items-center 
         z-[100] gap-4 px-4 py-4 sm:px-12 sm:py-10 relative"
        >
          {urlProjects.map((p, i) => (
            <ProjectCard project={p} key={i} />
          ))}
          <p className="text-sm text-white fixed bottom-[25%] left-1/2 -translate-x-1/2">Click pictures to open project</p>
        </div>
      </Backdrop>
      <div id="DesignAndDev" className="absolute top-20"></div>
    </section>
  );
};

export default DesignDev;

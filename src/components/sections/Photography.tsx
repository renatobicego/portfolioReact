import { Backdrop } from "@mui/material";
import { useState } from "react";
import PhotoCard from "./PhotoCard";
export const urlImages = [
  {
      href:'https://www.behance.net/gallery/169019449/Por-donde-vayan-tus-pies',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fpatagonia.jpg?alt=media&token=de3fa80f-f94c-4cae-8a7e-5cff0026b196',
      altText: 'Por donde vayan tus pies publication'
  },
  {
      href:'https://www.behance.net/gallery/161550355/Laguna-del-Diamante',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fdiamante.jpg?alt=media&token=ea1942f8-ac6c-4772-9dbb-9b68d154f9b4',
      altText: 'Laguna del diamante publication'
  },
  {
      href:'https://www.behance.net/gallery/184443143/udsn',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fudsn.jpg?alt=media&token=9693070d-828f-4341-9f32-824fa7680e8e',
      altText: 'Usted señalemelo publication'
  },
  {
      href:'https://www.behance.net/gallery/154863811/Divididos-Mendoza',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fdivididos.jpeg?alt=media&token=13bee7c5-9c83-444e-b954-b164757f2191',
      altText: 'Divididos mendoza publication'
  },
  {
      href:'https://www.behance.net/gallery/169146527/Invierno-en-Fa-menor',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Finvierno.jpg?alt=media&token=e1f73510-6645-40c4-ac5f-f69577614352',
      altText: 'Invierno en Fa menor publication'
  },
  {
      href:'https://www.behance.net/gallery/169146527/Invierno-en-Fa-menor',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Finvierno2.jpg?alt=media&token=6a5129a7-ef5e-41a9-9a2a-3c27e4101397',
      altText: 'Invierno en Fa menor publication'
  },
  {
      href:'https://www.behance.net/gallery/169146739/Luna',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fmoon.jpg?alt=media&token=f5939975-4899-43e6-946b-c5140d6f0408',
      altText: 'Luna publication'
    },
  {
      href:'https://www.behance.net/gallery/169147053/Umbral-de-la-Mirada',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fmirada.jpg?alt=media&token=48db16a2-9617-4330-8ea3-b16f65e347de',
      altText: 'Umbral de la mirada publication'
  },
  {
      href:'https://www.behance.net/gallery/169019449/Por-donde-vayan-tus-pies',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fpatagonia2.jpg?alt=media&token=1d8b7227-49a7-4cff-81b4-7a1dd68fb915',
      altText: 'Umbral de la mirada publication'
  },

  {
      href:'https://www.behance.net/gallery/169147053/Umbral-de-la-Mirada',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fmirada2.jpg?alt=media&token=fd306a23-e10c-4421-99ae-cdba75c2c7eb',
      altText: 'Umbral de la mirada publication'
  },
  {
      href:'https://www.behance.net/gallery/169146527/Invierno-en-Fa-menor',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Finvierno3.jpg?alt=media&token=68fd5335-3923-4701-9eff-0a45bb712812',
      altText: 'Invierno en Fa menor publication'
  },
  {
      href:'https://www.behance.net/gallery/161550355/Laguna-del-Diamante',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Fdiamante2.jpg?alt=media&token=27e0a144-a19d-4c25-b7b5-91b97b0f973b',
      altText: 'Laguna del diamante publication'
  },
  {
      href:'https://www.behance.net/gallery/169615365/Siete-siete-dos-dos',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2F7722.jpg?alt=media&token=0d22073b-452f-4f40-bf16-a8e7df92524a',
      altText: 'Siete siete dos dos publication'
  },
  {
      href:'https://www.behance.net/gallery/169616615/Inconsciente-colectivo',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/photography%2Finconsciente.jpg?alt=media&token=f969407d-a8ae-419f-9af8-aa4729d7507f',
      altText: 'Inconsciente colectivo publication'
  },
  

]
const Photography = () => {
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
        Photography
      </h3>
      <button onClick={handleOpen} className="btn-section shadow">
        Take a Look
      </button>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme: { zIndex: { drawer: number } }) =>
            theme.zIndex.drawer + 2,
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
          {urlImages.map((photo, i) => (
            <PhotoCard photo={photo} key={i} />
          ))}
          <p className="text-sm text-white fixed bottom-[25%] left-1/2 -translate-x-1/2 text-center">Click pictures to open Behance publication</p>
        </div>
      </Backdrop>
      <div id="Photography" className="absolute top-20"></div>
    </section>
  );
};

export default Photography;

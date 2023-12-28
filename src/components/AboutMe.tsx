const opinions = [
  {
    text: 'Renato is a great developer. During this last year I had the opportunity to work with him, demonstrating that he knew all the areas of development and design, being a great colleague. He was there in the moments where it seemed that the project was not moving forward, generating new ideas and demonstrating their value. Without a doubt Rena was and is a fundamental piece for the teams.',
    name: 'Maximiliano Cattaneo',
    company: 'Coworker at Digital House Career'
  },
  {
    text: 'I had the pleasure of having Renato for the web development of my entrepreneurship. From the beginning of the process to the final delivery he was very attentive to my needs, listening to each observation with patience and professionalism. Not only did he manage to meet the objectives set, but thanks to his advice he managed to greatly exceed my expectations. I also highlight his ability to work as a team.',
    name: 'Micaela Gerbeno',
    company: 'Mimpronta'
  },
  {
    text: `I recommend Renato, not only for being an excellent professional, but also for having great values as a person. Complying in "time and form" with his work. I was lucky enough to meet him virtually, and despite the distance I never doubted or mistrusted his professionalism. Don't doubt it, he is going to give you great solutions to your projects. `,
    name: 'Julián Guisasola',
    company: 'A3 Sport'
  }
]
const AboutMe = ({handleClose} : {handleClose: () => void}) => {
  return (
    <section
      className=" z-10 relative text-white md:rounded-lg pb-16 lg:pb-0 h-auto lg:rounded-none lg:h-full flex flex-col bg-[#22222260]
                  w-full items-center overflow-x-hidden overflow-y-auto lg:overflow-y-hidden gap-6 lg:gap-0"
    >
      <button className="fixed md:absolute rounded-lg p-1 bg-[#22222280] md:bg-transparent right-7 top-8 md:top-12 md:right-10 lg:right-10 z-50" onClick={handleClose}>
        <img
          className="w-6 cursor-pointer  
                       md:w-8 lg:top-6"
          src="img/icons/close.svg"
          alt=""
        />
      </button>

      <div className="flex flex-col md:flex-row gap-4 items-start lg:items-center w-full md:gap-10 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-renato.appspot.com/o/pp.jpg?alt=media&token=7af562a8-ff58-4daa-92b9-2bde8608b1cc"
          className="w-full h-56 md:h-full object-cover lg:h-auto md:w-1/3 lg:w-1/4 xl:w-[23%] 2xl:w-1/5 rounded-br-lg"
          alt="profile picture"
        />
        <div className="w-[90%] mx-auto md:w-[60%] lg:w-auto flex flex-col md:mt-20 md:mb-8 lg:mb-0 lg:mt-10 flex-wrap">
          <div className="lg:flex lg:flex-1">
            <div className="lg:flex-1">
              <h4 className="text-lg xs:text-xl md:text-3xl">About Me</h4>
              <p className="text-sm xs:text-base md:text-2xl my-4 mr-5 md:mr-10">
                Full stack developer, UX designer and photographer based in
                Mendoza, Argentina. Currently working freelance.
              </p>
            </div>
            <div className="lg:flex-1">
              <h4 className="text-lg xs:text-xl md:text-3xl">Skills</h4>
              <ul className="flex gap-6 py-4 md:text-xl list-disc list-inside text-sm xs:text-base">
                <div>
                  <li>Typescript</li>
                  <li>React/R3F</li>
                  <li>NextJS</li>
                  <li>ExpressJS</li>
                  <li>Framer Motion</li>
                </div>
                <div>
                  <li>Figma</li>
                  <li>Blender</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                </div>
              </ul>
            </div>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a target="_blank" href="https://github.com/renatobicego">
                  <img className="w-8" src="img/icons/github.png" alt="github" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.behance.net/renatobicefd92"
                >
                  <img className="w-8" src="img/icons/behance.png" alt="behance" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/renatobicego/"
                >
                  <img className="w-8" src="img/icons/linkedin.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:renato.bicego@gmail.com">
                  <img className="w-8" src="img/icons/mail.png" alt="email direction" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="w-[90%] md:pl-0 md:w-4/5 lg:w-[95%] flex flex-col items-center gap-4 py-2 flex-shrink-0 relative">
        <div className="w-full flex gap-2 py-2 md:py-8 overflow-x-auto">
          {opinions.map((o, i) => (
            <div key={i} className="flex flex-col gap-2 bg-[#22222280] text-white p-4 w-full md:w-[80%] lg:w-[32%] rounded-lg flex-shrink-0">
              <p className="text-sm md:text-base">
                "{o.text}"
              </p>
              <p className="text-xs md:text-sm ">{o.name} - {o.company}</p>
            </div>
          ))}
        </div>
        <p className="text-xs md:text-sm lg:hidden">Scroll Right</p>
      </div>
    </section>
  );
};

export default AboutMe;

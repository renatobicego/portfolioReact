interface Project {
  href: string;
  title: string;
  imgSrc: string;
  altText: string;
  fields: Array<string>;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-sm w-72 h-52 sm:w-96 sm:h-64 hover:scale-[1.02] transition-all duration-300 flex-shrink-0">
      <a target="_blank" href={project.href} className="relative flex items-end w-full h-full">
        <img
          loading="lazy"
          className="w-full h-full object-cover rounded-lg absolute left-0 top-0"
          src={project.imgSrc}
          alt={project.altText}
        />
        <div className="from-[#22222290] bg-gradient-to-t rounded-lg relative z-10 p-4 w-full h-3/4 flex items-end gap-3 flex-wrap content-end">
          {project.fields.map((field, i) => (
            <p
              key={i}
              className="text-[#222222] bg-white/90 rounded-3xl py-1 px-3 text-sm"
            >
              {field}
            </p>
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

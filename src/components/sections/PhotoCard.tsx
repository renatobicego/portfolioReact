interface Photo {
    href: string,
    imgSrc: string,
    altText: string
}

const PhotoCard = ({photo} : {photo: Photo}) => {
  return (
    <div className="rounded-sm w-72 h-52 sm:w-96 sm:h-64 hover:scale-[1.02] transition-all duration-300 flex-shrink-0">
      <a
        target="_blank"
        href={photo.href}
        className="relative flex items-end w-full h-full"
      >
        <img
          className="w-full h-full object-cover rounded-lg absolute left-0 top-0"
          src={photo.imgSrc}
          alt={photo.altText}
        />
      </a>
    </div>
  );
};

export default PhotoCard;

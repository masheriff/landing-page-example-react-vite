interface ProjectCardProps {
  title: string;
  imageUrl: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { title, imageUrl } = props;
  return (
    <div className="bg-white overflow-hidden relative">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="bg-black text-white p-2 absolute top-0 left-0 z-30">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

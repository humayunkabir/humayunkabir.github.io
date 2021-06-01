import Image from 'next/image';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const { title, thumbnail, slug } = project.fields;

  return (
    <div className="shadow-xl border rounded-lg">
      <img
        src={`https:${thumbnail.fields.file.url}`}
        className="object-cover object-bottom w-full md:h-52 lg:h-80 xl:h-72"
      />

      {/* <Image
        src={`https:${thumbnail.fields.file.url}`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      /> */}
      <div className="p-5 space-y-5 border-t">
        <h1 className="text-xl font-bold text-gray-700 mb-0">{title}</h1>
        <Button href={`/project/${slug}`}>Details</Button>
      </div>
    </div>
  );
};

export default ProjectCard;

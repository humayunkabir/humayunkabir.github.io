import { createClient } from 'contentful';
import ProjectCard from '../components/ProjectCard';

export const getStaticProps = async (ctx) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: 'portfolio',
  });

  return {
    props: {
      projects: response.items,
      revalidate: 1,
    },
  };
};

export default function Home({ projects }) {
  return (
    <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 ">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.sys.id} />
      ))}
    </main>
  );
}

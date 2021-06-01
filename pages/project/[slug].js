import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../../components/Button';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: 'portfolio',
  });

  const paths = response.items.map(({ fields: { slug } }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const {items} = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': slug,
  });

  if(!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      project: items[0],
      revalidate: 1,
    },
  };
};

const ProjectDetails = ({ project }) => {
  if(!project) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Button color="green" href={`/`}>
        Back
      </Button>
      <h1 className="text-3xl font-bold text-gray-700">
        {project.fields.title}
      </h1>
      <div className="border bg-indigo-100 border-indigo-900 rounded p-4">
        {documentToReactComponents(project.fields.content)}
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 4rem !important;
          }
        `}
      </style>
    </>
  );
};

export default ProjectDetails;

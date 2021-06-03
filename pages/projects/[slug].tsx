import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../../components/Button';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { items } = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: items[0],
      revalidate: 1,
    },
  };
};

import Image from 'next/image';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <h1>Loading...</h1>;
  }

  const { title, content, thumbnail } = project.fields;

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <div className="sticky top-32">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            className="object-cover object-bottom rounded-lg"
          />
        </div>
      </div>
      <div>
        <Button color="green" href="/projects">
          Back
        </Button>
        <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
        <div className="border bg-indigo-100 border-indigo-900 rounded p-4">
          {documentToReactComponents(content)}
        </div>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 4rem !important;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectDetails;

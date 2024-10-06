/*
// pages/docs/[component].js
import React from 'react';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import VirtualizedFeatureList from '../app/VirtualizedFeatureList,js';

export async function getStaticPaths() {
  const docsDir = path.join(process.cwd(), 'docs');
  const filenames = fs.readdirSync(docsDir);
  const paths = filenames.map((filename) => ({
    params: { component: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const docPath = path.join(process.cwd(), 'docs', `${params.component}.md`);
  const fileContent = fs.readFileSync(docPath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    props: {
      content,
      frontmatter: data,
    },
    revalidate: 10, // Revalidate at most once every 10 seconds
  };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const ComponentDoc = ({ content, frontmatter }) => {
  const { data: features, error } = useSWR(frontmatter.endpoint, fetcher);
  const { component } = useRouter().query;

  if (error) return <div>Failed to load features</div>;
  if (!features) return <div>Loading...</div>;

  return (
    <div>
      <h1>{component} Documentation</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
      {features && (
        <VirtualizedFeatureList
          features={features}
          height={400} // Example height, adjust as needed
          itemSize={35} // Example item size, adjust as needed
        />
      )}
    </div>
  );
};

export default ComponentDoc;*/

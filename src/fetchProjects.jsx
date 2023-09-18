import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'myProjects' });

      const projects = response.items.map((item) => {
        const { title, description, tech, source, live, image } = item.fields;
        const id = item.sys.id;
        const img_url = image?.fields?.file?.url;

        return { id, title, description, tech, source, live, image: img_url };
      });

      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

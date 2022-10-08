import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface Details {
  preview: string;
  title: string;
  desc: string;
}

const getDetails = async (
  githubLink: string,
  setDetails: React.Dispatch<React.SetStateAction<Details>>
) => {
  const res = await fetch(githubLink);
  const text = await res.text();
  const details: Details = { preview: '', title: '', desc: '' };

  text.replace(
    /<meta.+(property)="og:image" content="(.*?)" \/>/,
    (_m: string, _p0, p1, _p2) => {
      details.preview = p1;
      return p1;
    }
  );

  text.replace(
    /<meta.+(property|name)="description" content="(.*?)" \/>/,
    (_m: string, _p0, p1, _p2) => {
      details.desc = _m;
      return _m;
    }
  );

  text.replace(/<title>(.*?)<\/title>/, (_m: string, p0) => {
    details.title = p0;
    return p0;
  });
  console.log(details);
  setDetails(details);
};

const GitHubLink = ({ githubLink }: { githubLink: string }) => {
  const [details, setDetails] = useState<Details>();

  useEffect(() => {
    getDetails(githubLink, setDetails);
  }, []);

  return <div>Hello </div>;
};

export default GitHubLink;

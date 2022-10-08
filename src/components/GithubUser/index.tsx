import React from 'react';
import styles from './styles.module.css';

const GithubUser = ({ name, url }: { name?: string; url: string }) => {
  return (
    <a className={styles.container} href={url} title="ztjhz">
      <img src={`${url}.png`} height="60" width="60" />
      <div>{name ? name : url}</div>
    </a>
  );
};

export default GithubUser;

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import logo from '@site/static/img/nixie.jpg';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{ width: 280, borderRadius: '50%' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            Learn about me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Jing Hua's blog"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

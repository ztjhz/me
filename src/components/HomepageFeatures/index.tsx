import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Read my blog',
    description: (
      <>
        My exciting <a href="blog">adventures</a> in the world of coding
      </>
    ),
  },
  {
    title: 'Read my docs',
    description: (
      <>
        A comprehensive <a href="docs/about">documentation</a> of my life
      </>
    ),
  },
  {
    title: 'Connect with me',
    description: (
      <>
        <div>
          GitHub:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ztjhz"
          >
            ztjhz
          </a>
        </div>
        <div>
          Twitter:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/nikushii_"
          >
            nikushii_
          </a>
        </div>
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

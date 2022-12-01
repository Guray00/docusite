import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Imparare facilmente',
    Svg: require('@site/static/img/illustrations/coding.svg').default,
    description: (
      <>
        Decine di guide sempre a tua disposizione
      </>
    ),
  },
  {
    title: 'Tutto quello che ti serve',
    Svg: require('@site/static/img/illustrations/online_learning.svg').default,
    description: (
      <>
        Tutto il materiale che ti serve è sempre disponibile online
      </>
    ),
  },
  {
    title: 'Esercitati',
    Svg: require('@site/static/img/illustrations/programming.svg').default,
    description: (
      <>
        Allenati prima di un compito o di un esame attraverso il portale dedicato
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

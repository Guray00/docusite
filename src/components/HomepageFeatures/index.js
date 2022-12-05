import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Materiale selezionato',
    Svg: require('@site/static/img/illustrations/coding.svg').default,
    description: (
      <>
         Avrai a disposizione una vasta selezione di materiale teorico sulla programmazione, accuratamente scelto
		 per essere facilmente comprensibile e di alta qualità.
      </>
    ),
  },
  {
    title: 'Risorse aggiornate',
    Svg: require('@site/static/img/illustrations/online_learning.svg').default,
    description: (
      <>
        Avrai accesso a risorse didattiche aggiornate e complete, che ti aiuteranno a comprendere gli argomenti 
		e a migliorare le tue competenze in informatica.
      </>
    ),
  },
  {
    title: 'Esercizi su misura',
    Svg: require('@site/static/img/illustrations/programming.svg').default,
    description: (
      <>
        Potrai esercitarti in modo comodo e conveniente, senza dover dipendere dalla disponibilità degli insegnanti
		o degli amici, così da identificare le lacune e concentrarti sugli argomenti più importanti.
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

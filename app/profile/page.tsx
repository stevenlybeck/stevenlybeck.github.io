import React from 'react';
import Image from 'next/image';
import styles from './profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Profile</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <Image src="/api/placeholder/800/400" alt="Placeholder for profile header" width={800} height={400} className={styles.headerImage} />
        <ul className={styles.list}>
          <li className={styles.listItem}>I'm a <strong className={styles.highlight}>software engineer</strong>, a <strong className={styles.highlight}>mover,</strong> and a <strong className={styles.highlight}>human</strong> who grew up in Northern California. I moved to Berkeley to study <strong className={styles.highlight}>art</strong> at UC Berkeley, and have spent most of my post-college life living in the <strong className={styles.highlight}>East Bay.</strong></li>
          <li className={styles.listItem}>I want to become a <strong className={styles.highlight}>housing developer</strong> because I have come to see that not only is the housing crisis one of the primary drivers of challenges faced by Californians, but a <strong className={styles.highlight}>well-designed built environment</strong> including housing is key to providing people with the basics of a good life: connection, activity, health and prosperity.</li>
          <li className={styles.listItem}>This website exists to help me tell the story of why and how I'm charting a course from being a software engineer to being a housing developer.</li>
        </ul>
      </section>

      {/* ... other sections with similar changes ... */}

    </div>
  );
}
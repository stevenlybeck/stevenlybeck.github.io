import React from 'react';
import PlaceholderImage from '@/components/PlaceholderImage';
import styles from '../styles/shared.module.css';

export default function Podcast() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Making It Home</h1>
      <PlaceholderImage alt="Making It Home Podcast Cover" width={800} height={400} />
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About the Podcast</h2>
        <p className={styles.paragraph}>
          "Making It Home" is a podcast where we explore the intersection of housing, community, and personal experience. In each episode, I interview individuals about a specific place they've lived in the past, discussing elements of the built environment, community dynamics, and personal memories associated with that place.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest Episodes</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Episode 1: [Guest Name] - [Brief Description]</li>
          <li className={styles.listItem}>Episode 2: [Guest Name] - [Brief Description]</li>
          <li className={styles.listItem}>Episode 3: [Guest Name] - [Brief Description]</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Listen Now</h2>
        <p className={styles.paragraph}>
          You can find "Making It Home" on all major podcast platforms:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="#">Apple Podcasts</a></li>
          <li className={styles.listItem}><a href="#">Spotify</a></li>
          <li className={styles.listItem}><a href="#">Google Podcasts</a></li>
        </ul>
      </section>
    </div>
  );
}
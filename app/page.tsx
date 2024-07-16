import React from 'react';
import styles from './styles/shared.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to My Journey</h1>
      <p className={styles.paragraph}>From Software Engineering to Housing Development</p>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About This Site</h2>
        <p className={styles.paragraph}>This website chronicles my transition from a career in software engineering to becoming a housing developer. Here, you'll find information about my background, my current projects, and my vision for the future of housing.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="/profile">Learn more about my background and journey</a></li>
          <li className={styles.listItem}><a href="/projects">View my software engineering projects</a></li>
          <li className={styles.listItem}><a href="/career-shift">Follow my career shift journey</a></li>
        </ul>
      </section>
    </div>
  );
}
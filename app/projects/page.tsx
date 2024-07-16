import React from 'react';
import Image from 'next/image';
import styles from '../styles/shared.module.css';

export default function Projects() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Software Engineering Projects</h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3D Robot Arm Visualization</h2>
        <Image src="/api/placeholder/800/400" alt="Placeholder for Robot Arm Visualization" width={800} height={400} className={styles.image} />
        <p className={styles.paragraph}>A 3D visualization of a robot arm to visualize data streaming into a management platform for fleets of robotics.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>WebRTC Bridge for Robot Control</h2>
        <Image src="/api/placeholder/800/400" alt="Placeholder for WebRTC Bridge" width={800} height={400} className={styles.image} />
        <p className={styles.paragraph}>A WebRTC bridge for direct control of mobile robots from a web browser.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>NextJS-based UX Development Framework</h2>
        <Image src="/api/placeholder/800/400" alt="Placeholder for NextJS Framework" width={800} height={400} className={styles.image} />
        <p className={styles.paragraph}>A NextJS-based framework supporting UX development for hundreds of engineers.</p>
      </section>
    </div>
  );
}
import React from 'react';
import PlaceholderImage from '@/components/PlaceholderImage';
import styles from '../styles/shared.module.css';

export default function Profile() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Profile</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <PlaceholderImage alt="Placeholder for profile header" width={800} height={400} />
        <ul className={styles.list}>
          <li className={styles.listItem}>I'm a <strong className={styles.highlight}>software engineer</strong>, a <strong className={styles.highlight}>mover,</strong> and a <strong className={styles.highlight}>human</strong> who grew up in Northern California. I moved to Berkeley to study <strong className={styles.highlight}>art</strong> at UC Berkeley, and have spent most of my post-college life living in the <strong className={styles.highlight}>East Bay.</strong></li>
          <li className={styles.listItem}>I want to become a <strong className={styles.highlight}>housing developer</strong> because I believe a lack of housing is a primary driver of challenges faced by Californians, and I believe that <strong className={styles.highlight}>well-designed built environments</strong> are key to providing people with the basics of a good life: connection, activity, health and prosperity.</li>
          <li className={styles.listItem}>This website exists to help me tell the story of why and how I'm charting a course from being a software engineer to being a housing developer.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Early Background</h2>
        <PlaceholderImage alt="Placeholder for early background" width={400} height={300} />
        <ul className={styles.list}>
          <li className={styles.listItem}>I began learning to program in elementary school. My interest was supercharged when I discovered that I could publish websites and be connected to people all around the world.</li>
          <li className={styles.listItem}>In high school, I applied these abilities to a web development company called Epoch Media. I made websites for local businesses, artists, and merchants. I was even featured on a nationwide news broadcast about teen business owners!</li>
          <li className={styles.listItem}>Also during middle and high school, I made friends with people who lived in a housing development that I later came to understand was a form of <strong className={styles.highlight}>cohousing</strong>. The shared resources made this community a defacto hub - including providing gradual autonomy as we grew from children into teenagers.</li>
          <li className={styles.listItem}>In college, I pivoted to art for several years. Many people would consider this a detour, but I find that creating art and creating software actually have a lot in common. The interesting stuff happens in the zone between the practical, the aesthetic, and the exploratory!</li>
          <li className={styles.listItem}>During college, I lived in the Berkeley Student Cooperatives. I came to appreciate the value of sharing resources and of intentionally structured housing.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Career in Software Engineering</h2>
        <PlaceholderImage alt="Placeholder for software career" width={400} height={300} />
        <ul className={styles.list}>
          <li className={styles.listItem}>After college, I pivoted back to software engineering. The money was good, and student loans and housing are pricey.</li>
          <li className={styles.listItem}>I began a freelance career that exposed me to small businesses, game development companies, VC-funded startups, and eventually publicly traded companies.</li>
          <li className={styles.listItem}>While freelancing, I learned a lot about project and technology planning.</li>
          <li className={styles.listItem}>As I moved into bigger companies, I took on team leadership and product management responsibilities.</li>
          <li className={styles.listItem}>Ultimately at Flexport, I was responsible for "front-end infrastructure" which meant understanding the history of the codebase and the needs of hundreds of UX and product engineers, selecting appropriate technology stacks, and crucially: adapting, advocating, and supporting their use throughout the engineering organization.</li>
          <li className={styles.listItem}>Highlights: Nextjs, GraphQL, authentication, architecture decisions</li>
          <li className={styles.listItem}>Selected freelance projects: Freedom Robotics robot arm, Freedom Robotics webrtc</li>
          <li className={styles.listItem}>Selected employee projects: AOI editor, Analysis graphics download manager, subresource integrity, support of an app with hundreds of developers</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Emerging Interest in Urbanism and Housing Development</h2>
        <p className={styles.paragraph}>Having lived in cooperative or shared housing for most of my adult life, I've seen the benefits of alternatives to our atomized norms. I've also <strong className={styles.highlight}>listened to stories</strong> of what people value in their housing, thought a lot about what phases of my own life have felt the most growthful, loved and flourishing. And I want to be involved in helping more of this be available to more people!</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Turning Point</h2>
        <p className={styles.paragraph}>[Describe the moment or reasons that solidified your decision to transition into housing development.]</p>
        <p className={styles.paragraph}>[Share any personal stories or experiences that influenced your decision.]</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Transition to Housing Development</h2>
        <PlaceholderImage alt="Placeholder for transition" width={400} height={300} />
        <ul className={styles.list}>
          <li className={styles.listItem}>I've been meeting people from different sides of real estate development - investors, architects, design-build companies, developers, city planners, startup people - and learning everything I can from them!</li>
          <li className={styles.listItem}>The gaps for me are clear - I'm a software developer, and while I have executed a few small homeowner projects, I have a lot to learn when it comes to bringing together the parties involved in getting housing built from the ground up.</li>
          <li className={styles.listItem}>At the current moment, it seems that homeowner-funded projects like ADUs are seeing the most activity. Access to capital is a very different thing than just a few short years ago, but many homeowners have solid equity and visions for how their property could better meet the needs of them and their community.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Current Focus</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Currently I'm trying to connect with design-build companies where I can help streamline, reduce manual work, or increase quality and accuracy. My goal is to be in a seat next to people directly involved in the housing development process - site prequalification/planning, design, plan preparation, planning approval, and construction.</li>
          <li className={styles.listItem}>The ultimate goal for me is to be in a position where I can confidently take on the role of developer in a small-scale multifamily project.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conclusion</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>If you've read this far, I feel honored!</li>
          <li className={styles.listItem}>I'm looking to learn, and I'm looking to share what I learn. So reach out!</li>
          <li className={styles.listItem}>[Mailing list]</li>
        </ul>
      </section>
    </div>
  );
}
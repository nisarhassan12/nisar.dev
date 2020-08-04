import ContributeDevPreview from '../resources/contribute-dev.png';
import GitpodPreview from '../resources/gitpod-io.png';
import NeonLaw from '../resources/neonlaw.png';
import Project from './Project';
import React from 'react';
import TheiaPreview from '../resources/theia-ide.png';
import TypeFoxPreview from '../resources/typefox-io.png';

const projects = [
  {
    video: '/portfolio.mp4',
    description:
      'A beautiful lightweight accessible and performant personal portfolio website template.',
    title: 'portfolio',
    url: 'https://nisar.surge.sh',
    repo: 'nisarhassan12/portfolio',
    tools: ['HTML', 'SCSS', 'JavaScript', 'Parcel'],
  },
  {
    path: GitpodPreview,
    description:
      'Website for Gitpod a online cloud IDE based on Eclipse Theia.',
    title: 'gitpod.io',
    url: 'https://www.gitpod.io',
    repo: 'gitpod-io/website',
    tools: ['React', 'TypeScript', 'Gatsby', 'Emotion'],
  },
  {
    path: TheiaPreview,
    description:
      'Website for Theia IDE a open source vendor neutral VS Code alternative.',
    title: 'theia-ide.org',
    url: 'https://theia-ide.org',
    repo: 'theia-ide/theia-website',
    tools: ['React', 'Gatsby', 'Hooks', 'Emotion'],
  },
  {
    path: ContributeDevPreview,
    description:
      'A website that list beginner friendly open source projects that are ready to code.',
    title: 'contribute.dev',
    url: 'https://contribute.dev',
    repo: 'gitpod-io/contribute.dev',
    tools: ['React', 'Gatsby', 'Emotion', 'Sheilds.io'],
  },
  {
    path: NeonLaw,
    description: 'Website for Neon Law. The Upward Mobility Law Firm.',
    title: 'neonlaw.com',
    url: 'https://neonlaw.com',
    repo: 'NeonLaw/codebase',
    tools: ['React', 'Gatsby', 'GraphQL', 'Chakra UI'],
  },
  {
    video: '/portfolio-template.mp4',
    description:
      'A beautiful minimal and accessible portfolio template for developers.',
    title: 'portfolio-template',
    url: 'https://portfolio-template.surge.sh',
    repo: 'nisarhassan12/portfolio-template',
    tools: ['HTML', 'CSS', 'JavaScript', 'SVG'],
  },
  {
    path: TypeFoxPreview,
    description:
      'Website for TypeFox a company that builds dev tools & programming languages for engineers.',
    title: 'typefox.io',
    url: 'https://typefox.io',
    tools: ['React', 'TypeScript', 'Gatsby', 'Emotion'],
  },
];

const Work = () => (
  <section id="work">
    <div className="row">
      <h2 className="heading--underlined">My Work</h2>
      <div>
        {projects.map((p, i) => (
          <Project key={i} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;

import ContributeDev from '../resources/contribute-dev.png';
import Gitpod from '../resources/gitpod-io.png';
import NeonLaw from '../resources/neonlaw.png';
import PortfolioTemplate from '../resources/portfolio-template.png'
import Project from './Project';
import React from 'react';
import TheiaPreview from '../resources/theia-ide.png';
import DevX from '../resources/devxconf.png';
import TypeFoxPreview from '../resources/typefox-io.png';

const projects = [
  {
    path: Gitpod,
    description:
      'Website for Gitpod a online cloud IDE based on Eclipse Theia.',
    title: 'gitpod.io',
    url: 'https://www.gitpod.io',
    repo: 'gitpod-io/website',
    tools: ['Svelte', 'Tailwind', 'SvelteKit', 'Google Sheets'],
  },
  {
    path: DevX,
    description:
      'Website for DevX Conf a confrence about developer experience.',
    title: 'devxconf.org',
    url: 'https://devxconf.org/',
    repo: 'gitpod-io/devxconf.org',
    tools: ['React', 'Next', 'CSS Modules', 'DatoCMS'],
  },
  {
    path: PortfolioTemplate,
    description:
      'A beautiful minimal and accessible portfolio template for developers.',
    title: 'portfolio-template',
    url: 'https://portfolio-template.surge.sh',
    repo: 'nisarhassan12/portfolio-template',
    tools: ['HTML', 'CSS', 'JavaScript'],
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
    path: ContributeDev,
    description:
      'A website that list beginner friendly open source projects that are ready to code.',
    title: 'contribute.dev',
    url: 'https://contribute.dev',
    repo: 'gitpod-io/contribute.dev',
    tools: ['React', 'Gatsby', 'Emotion', 'Sheilds.io'],
  },
  {
    path: TypeFoxPreview,
    description:
      'Website for TypeFox a company that builds dev tools & programming languages for engineers.',
    title: 'typefox.io',
    url: 'https://typefox.io',
    tools: ['React', 'TypeScript', 'Gatsby', 'Emotion'],
  },
  {
    path: NeonLaw,
    description: 'Website for Neon Law. The Upward Mobility Law Firm.',
    title: 'neonlaw.com',
    url: 'https://neonlaw.com',
    repo: 'NeonLaw/codebase',
    tools: ['React', 'Gatsby', 'GraphQL', 'Chakra UI'],
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

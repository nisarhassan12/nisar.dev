import AgencyElevation from '../images/agency-elevation.jpg';
import ContributeDev from '../images/contribute-dev.png';
import DasjoAt from '../images/dasjo-at.png'
import DevXConf from '../images/devxconf.png';
import DevX from '../images/devx-dark.png';
import Gitpod from '../images/gitpod-io.png';
import PortfolioTemplate from '../images/portfolio-template.png'
import Project from './project';
import React from 'react';
import TheiaPreview from '../images/theia-ide.png';
import TypeFoxPreview from '../images/typefox-io.png';
import MaterializeImage from '../images/materialize-screenshot.png';

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
    path: DevXConf,
    description:
      'Website for DevX Conf a confrence about developer experience.',
    title: 'devxconf.org',
    url: 'https://devxconf.org/',
    repo: 'gitpod-io/devxconf.org',
    tools: ['React', 'Next', 'CSS Modules', 'DatoCMS'],
  },
  {
    path: MaterializeImage,
    title: 'materialize.com',
    description: 'Website for Materialize an operational database warehouse.',
    url: 'https://materialize.com/',
    tools: ['Svelte', 'SvelteKit', 'Tailwind', 'Stackbit CMS'],
  },
  {
    path: DevX,
    description: 'Website for DevX A dedicated space for developer experience',
    title: 'DevX',
    url: 'https://www.developerexperience.us/',
    repo: 'https://github.com/gitpod-io/devx-community/',
    tools: ['Svelte', 'Tailwind', 'SvelteKit', 'Google Sheets']
  },
  {
    path: DasjoAt,
    description:
      'Website for Josef Kruckenberg a Drupal Contributor.',
    title: 'dasjo.at',
    url: 'https://dasjo.at',
    tools: ['TypeScript', 'React', 'Gatsby', 'Airtable'],
  },
  {
    path: PortfolioTemplate,
    description:
      'A free to use, minimal and accessible portfolio template for developers.',
    title: 'portfolio-template',
    url: 'https://portfolio-template.surge.sh',
    repo: 'nisarhassan12/portfolio-template',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    path: AgencyElevation,
    description: "Website for Agency Elevation.",
    title: 'agencyelevation.com',
    url: 'https://www.agencyelevation.com/',
    tools: ['React', 'Gatsby', 'Emotion']
  },
  {
    path: TheiaPreview,
    description:
      'Website for Theia IDE a open source vendor neutral VS Code alternative.',
    title: 'theia-ide.org',
    url: 'https://theia-ide.org',
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

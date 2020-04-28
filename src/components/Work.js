import React from 'react'

import Project from './Project'
import GitpodPreview from '../resources/gitpod-io.png'
import TheiaPreview from '../resources/theia-ide.png'
import ContributeDevPreview from '../resources/contribute-dev.png'
import TypeFoxPreview from '../resources/typefox-io.png'
import TotaliserPreview from '../resources/totaliser.png'

const projects = [
    {
        video: '/portfolio.mp4',
        description: 'A free open source portfolio template for web developers for anyone to use as their own or customize the way they like.',
        title: 'Portfolio template',
        url: 'https://nisar.surge.sh',
        repo: 'nisarhassan12/portfolio'
    },
    {
        path: GitpodPreview,
        description: 'Website for a free online IDE that launches ready to code workspaces with a single click.',
        title: 'gitpod.io',
        url: 'https://gitpod.io',
        repo: 'gitpod-io/website'
    },
    {
        path: TheiaPreview,
        description: 'Website for Theia IDE a open source vendor neutral VS Code alternative.',
        title: 'theia-ide.org',
        url: 'https://theia-ide.org'
    },
    {
        path: ContributeDevPreview,
        description: 'A website that list beginner friendly open source projects that are ready to code.',
        title: 'contribute.dev',
        url: 'https://contribute.dev'
    },
    {
        path: TypeFoxPreview,
        description: 'Website for TypeFox a company that builds dev tools & programming languages for engineers.',
        title: 'typefox.io',
        url: 'https://typefox.io'
    }, {
        path: TotaliserPreview,
        description: 'A simple calculator app built with React.',
        title: 'Totaliser',
        url: 'https://totaliser.surge.sh'
    }
]

const Work = () => (
    <section>
        <div className="row">
            <h1 className="heading--underlined">Projects</h1>
            <div>
                {
                    projects.map((p, i) => <Project key={i} {...p} />)
                }
            </div>
        </div>
    </section>
)

export default Work
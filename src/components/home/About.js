import React from 'react'
import { Link } from 'gatsby'

const About = () => (
    <section>
        <div className="row">
            <div className="wrapper">
                <h2 className="heading--underlined">About Me</h2>
                <p>
                    My name is Syed Nisar Hassan Naqvi I am a self-taught front end developer and interface designer based in Lahore, Pakistan. I'm passionate about accessibility, web performace and great web design and things that make life easier for the users. 
                </p>
                <p>
                    I currently work for <a href="https://typefox.io" target="_blank">TypeFox</a> as a freelance front-end developer where the entirety of the work i do is open source.
                </p>
                <p>
                    I was always curious about computers. When I was a child I was introduced to programming in school, I started learning about Linux and Web Development when I was in High School. In the year 2018, I dropped out of university at the age of 18 with the grand plans of becoming a great Web Developer and Computer Scientist. I started my career as a front end web developer in 2019.
                </p>
                <p>Got something to say feel free to <Link to="/contact/">reach out</Link> I'll try my best to respond back.</p>
            </div>
        </div>
    </section>
)

export default About
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";


function Home () {

    return (
        <div>
            <div className="home">
                <div className="home__portfolio">
                    <div>Lee Gownseon Portfolio</div>
                </div>
            </div>
            <nav className="nav">
                <div className="nav__list">
                    <ul>
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Project</li>
                    </ul>
                </div>
            </nav>
                <AboutMe />
                <Skills />
                <Project />
                <Contact />
        </div>
    )
}

export default Home;
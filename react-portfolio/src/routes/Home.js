import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Styles from "../scss_css/Home.module.css";


function Home () {

    return (
        <div>
            <div className={Styles.home}>
                <div>PORTFOLIO</div>
            </div>
            <div className={Styles.header}>
                <div className={Styles.header__item}><a href="#">About me</a></div>
                <div className={Styles.header__item}><a href="#">Skills</a></div>
                <div className={Styles.header__item}><a href="#">Project</a></div>
            </div>
                <AboutMe />
                <Skills />
                <Project />
                <Contact />
        </div>
    )
}

export default Home;
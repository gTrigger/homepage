import { MenuItem } from "../store/reducer";
import { useDispatch } from 'react-redux'

const About = () => {
    const dispatch = useDispatch();

    const scrollToElement = (elementClass) => {
        const element = document.getElementsByClassName(elementClass)[0];
        dispatch({ type: `menu/changeActiveItem/${elementClass}` });
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    return (
        <div className="about homepage-section">
            <p className="about__hello">
                Hey!
            </p>
            <p>
                I'm Anna, frontend developer with more than 4 years of commercial development experience. I enjoy creating user-friendly, useful and fancy things ✨
            </p>
            <p>
                My preferable stack is Vue + Typescript, however, I feel enthusiastic about diving into any new technologies and concepts.
            </p>
            <p>
                I'm always open to new challenges and opportunities, so don't hesitate to
                <span className="about__contacts-link" onClick={() => scrollToElement(MenuItem.CONTACTS)}>
                    &nbsp;contact me
                </span>!
            </p>
        </div>
    );
}

export { About };

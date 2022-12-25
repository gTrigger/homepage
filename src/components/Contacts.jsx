import github from 'assets/images/icons/github.svg'
import linkedIn from 'assets/images/icons/linkedin.svg'
import telegram from 'assets/images/icons/telegram.svg'
import {useRef} from "react";

const Contacts = () => {
    const contactsRef = useRef(null);

    return (
        <div className="contacts homepage-section" ref={contactsRef}>
            <p className="contacts__text">
                Let's be in touch!
            </p>
            <div className="contacts__socials">
                <div className="social-logo">
                    <img src={linkedIn}
                         onClick={() => window.open('https://www.linkedin.com/in/anefimova/')}
                         alt="linkedIn"/>
                </div>
                <div className="social-logo">
                    <img src={telegram}
                     onClick={() => window.open('https://t.me/gTrigger/')}
                     alt="telegram"/>
                </div>
                <div className="social-logo">
                    <img src={github}
                     onClick={() => window.open('https://t.me/gTrigger')}
                     alt="github"/>
                </div>
            </div>
        </div>
    );
}

export { Contacts };

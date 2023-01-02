import { ReactComponent as LinkedInIcon } from 'assets/images/icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/icons/telegram.svg';
import { ReactComponent as GithubIcon } from 'assets/images/icons/github.svg';

const Contacts = () => {
    function copyToClipboard() {
        const tooltip = document.getElementsByClassName('contacts__tooltip')[0];
        navigator.clipboard.writeText('gtrigger@yandex.ru');
        tooltip.innerHTML = 'Copied';

        setTimeout(() => {
            tooltip.innerHTML = 'Copy to clipboard'
        }, 20 * 1000)
    }

    return (
        <div className="contacts homepage-section">
            <p className="contacts__text">
                Let's be in touch!
            </p>
            <p className="contacts__text">
                Contact me via
                <span className="contacts__email" onClick={() => copyToClipboard() }>
                    <span className="contacts__tooltip">Copy to clipboard</span>
                    &nbsp;email&nbsp;
                </span>
                or any following socials:
            </p>
            <div className="contacts__socials">
                <div className="social-logo linkedin" onClick={() => window.open('https://www.linkedin.com/in/anefimova/')}>
                    <LinkedInIcon title="linkedIn" height="40" width="40"/>
                </div>
                <div className="social-logo telegram" onClick={() => window.open('https://t.me/gTrigger/')}>
                    <TelegramIcon title="telegram" height="40" width="40"/>
                </div>
                <div className="social-logo github" onClick={() => window.open('https://github.com/gTrigger')}>
                    <GithubIcon title="github" height="40" width="40"/>
                </div>
            </div>
        </div>
    );
}

export { Contacts };

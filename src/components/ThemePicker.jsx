import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {Theme} from 'store/reducer'

const ThemePicker = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.currentTheme);
    const themes = [Theme.AURORA, Theme.SAGE]

    function setInitialTheme() {
        document.body.classList.add(currentTheme);
    }

    function setTheme(theme) {
        toggleThemesMenu();
        document.body.classList.remove(currentTheme);
        dispatch({ type: `theme/changeTheme/${theme}` });
        document.body.classList.add(theme);
    }

    function toggleThemesMenu() {
        const themesButton = document.getElementsByClassName('theme-picker__button')[0];
        const themesMenu = document.getElementsByClassName('theme-picker__menu')[0];
        themesButton.classList.toggle("active");
        themesMenu.classList.toggle("active");
    }

    useEffect(() => {
        setInitialTheme();
    });

    return (
        <>
            <div className="theme-picker__menu">
                {
                    themes.length > 0 && themes.map((theme, index) => (
                        <div className={"theme-picker__theme " + theme} key={index} onClick={() => setTheme(theme)}>
                            <div className="colors">
                                <div className="primary"/>
                                <div className="secondary"/>
                                <div className="accent"/>
                            </div>

                            <span>{theme}</span>
                        </div>
                    ))
                }

            </div>
            <div className="app-footer__link theme-picker__button" onClick={() => toggleThemesMenu()}>
                    <span className="material-symbols-outlined">
                        palette
                    </span>
            </div>
        </>
    );
}

export { ThemePicker };

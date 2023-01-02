import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {MenuItem} from 'store/reducer'
import {ThemePicker} from "./ThemePicker";

const Layout = () => {
    const dispatch = useDispatch();
    const activeMenuItem = useSelector(state => state.activeMenuItem);
    const documentElement = document.documentElement;
    const body = document.body;

    function onScroll() {
        if (documentElement.scrollTop < documentElement.clientHeight * 0.7) {
            return changeActiveMenuItem(MenuItem.ABOUT);
        }
        if (
            documentElement.scrollTop > documentElement.clientHeight * 0.7
            && documentElement.scrollTop < documentElement.clientHeight * 0.7 * 2
        ) {
            return changeActiveMenuItem(MenuItem.PROJECTS);
        }
        if (documentElement.scrollTop > documentElement.clientHeight * 0.7 * 2) {
            return changeActiveMenuItem(MenuItem.CONTACTS);
        }
    }

    const scrollToElement = (elementClass) => {
        const element = document.getElementsByClassName(elementClass)[0];
        dispatch({ type: `menu/changeActiveItem/${elementClass}` });
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    const changeActiveMenuItem = (menuItem) => {
        document.getElementsByClassName(`menu-${activeMenuItem}`)[0].classList.remove('active');
        dispatch({ type: `menu/changeActiveItem/${menuItem}` });
        document.getElementsByClassName(`menu-${menuItem}`)[0].classList.add('active');
    };

    useEffect(() => {
        onScroll();
        body.onscroll = () => onScroll();
    });

    return (
        <>
            <div className="background"/>
            <header className="app-header">
                <div className="app-header__link menu-about" onClick={() => scrollToElement(MenuItem.ABOUT)}>About</div>
                <div className="app-header__link menu-projects" onClick={() => scrollToElement(MenuItem.PROJECTS)}>Projects</div>
                <div className="app-header__link menu-contacts" onClick={() => scrollToElement(MenuItem.CONTACTS)}>Contacts</div>
            </header>
            <main className="app-container">
                <Outlet />
            </main>
            <footer className="app-footer">
                <ThemePicker/>
            </footer>
        </>
    );
}

export { Layout };

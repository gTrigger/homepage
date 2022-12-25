export const Theme = {
    DARK: 'dark',
    LIGHT: 'light',
}

export const MenuItem = {
    ABOUT: 'about',
    PROJECTS: 'projects',
    CONTACTS: 'contacts',
}

const InitialState = {
    currentTheme: Theme.DARK,
    activeMenuItem: MenuItem.ABOUT,
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'theme/changeTheme/dark': {
            return { ...state, currentTheme: Theme.DARK };
        }

        case 'theme/changeTheme/light': {
            return { ...state, currentTheme: Theme.LIGHT };
        }

        case 'menu/changeActiveItem/about': {
            return { ...state, activeMenuItem: MenuItem.ABOUT };
        }

        case 'menu/changeActiveItem/projects': {
            return { ...state, activeMenuItem: MenuItem.PROJECTS };
        }

        case 'menu/changeActiveItem/contacts': {
            return { ...state, activeMenuItem: MenuItem.CONTACTS };
        }

        default: {
            return state;
        }
    }
}

export default reducer;

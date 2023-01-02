export const Theme = {
    AURORA: 'aurora',
    SAGE: 'sage',
}

export const MenuItem = {
    ABOUT: 'about',
    PROJECTS: 'projects',
    CONTACTS: 'contacts',
}

const InitialState = {
    currentTheme: Theme.AURORA,
    activeMenuItem: MenuItem.ABOUT,
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'theme/changeTheme/aurora': {
            return { ...state, currentTheme: Theme.AURORA };
        }

        case 'theme/changeTheme/sage': {
            return { ...state, currentTheme: Theme.SAGE };
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

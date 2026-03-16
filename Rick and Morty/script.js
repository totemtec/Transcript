const classes = ['notifications-placeholder', 'global-top-navigation', 'global-explore-navigation', 'global-footer'
    , 'page-footer', 'page__right-rail', 'bottom-ads-container', 'page-side-tools__wrapper', 'infobox-interior'
    , 'community-header-wrapper', 'Userbox', 'fandom-community-header__background', 'skip-link'
    , 'top_leaderboard-odyssey-wrapper'
];
classes.forEach(className => {
    const elements = document.getElementsByClassName(className);
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove();
    }
});

const ids = ['p-views', 'Transcript', 'Site_navigation'];
ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
});

const childrenClasses = ['mw-editsection'];
childrenClasses.forEach(className => {
    const elements = document.getElementsByClassName(className);
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.remove();
    }
});

// const age_gate = document.getElementById('age-gate');
// if (age_gate) {
//     age_gate.parentNode.remove();
// }


// const pageHeader = document.getElementById('page-header');
// if (pageHeader) {
//     pageHeader.remove();
// }







const classes = ['notifications-placeholder', 'global-top-navigation', 'global-explore-navigation', 'global-footer'
    , 'page-footer', 'page__right-rail', 'bottom-ads-container', 'page-side-tools__wrapper', 'infobox-interior'
    , 'community-header-wrapper', 'Userbox', 'fandom-community-header__background', 'skip-link'
    , 'top_leaderboard-odyssey-wrapper', 'page-header__top', 'page-header__page-subtitle'
];
classes.forEach(className => {
    const elements = document.getElementsByClassName(className);
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].remove();
    }
});

const ids = ['community-navigation', 'p-views'];
ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
});

const childrenIds = ['Transcript', 'Site_navigation'];
childrenIds.forEach(id => {
    const element = document.getElementById(id);
    if (element && element.parentNode) {
        element.parentNode.remove();
    }
});

const childrenClasses = ['mw-editsection'];
childrenClasses.forEach(className => {
    const elements = document.getElementsByClassName(className);
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.remove();
    }
});



const pageMain = document.getElementsByClassName('page__main');
if (pageMain && pageMain.length > 0) {
    pageMain[0].style.padding='0';
    pageMain[0].style.borderRadius='0';
    if (pageMain[0].parentNode) {
        pageMain[0].parentNode.style.margin='0';
        pageMain[0].parentNode.style.border='0';
    }
}

const mainContainers = document.getElementsByClassName('main-container');
for (const element of mainContainers) {
    element.style.marginLeft = '0';
    element.style.width = '100%';
}

const resizableContainer = document.getElementsByClassName('resizable-container');
if (resizableContainer && resizableContainer.length > 0) {
    resizableContainer[0].style.width='100%';
    resizableContainer[0].style.margin='0';
    resizableContainer[0].style.top='0'; 
}




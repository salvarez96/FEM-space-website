interface NavigationItems {
  groupNumber: string
  navTitle: string,
  navLink: string
}

const navigationItems: NavigationItems[] = [];

function addNavigationItems(groupNumber: NavigationItems['groupNumber'], navTitle: NavigationItems['navTitle'], navLink: NavigationItems['navLink']) {
  navigationItems.push({ groupNumber, navTitle, navLink })
}

addNavigationItems('00', 'HOME', '/home')
addNavigationItems('01', 'DESTINATION', '/destination')
addNavigationItems('02', 'CREW', '/crew')
addNavigationItems('03', 'TECHNOLOGY', '/technology')

export { navigationItems }
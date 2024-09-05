interface NavigationItems {
  groupNumber: string
  navTitle: string
}

const navigationItems: NavigationItems[] = [];

function addNavigationItems(groupNumber: NavigationItems['groupNumber'], navTitle: NavigationItems['navTitle']) {
  navigationItems.push({ groupNumber, navTitle })
}

addNavigationItems('00', 'HOME')
addNavigationItems('01', 'DESTINATION')
addNavigationItems('02', 'CREW')
addNavigationItems('03', 'TECHNOLOGY')

export { navigationItems }
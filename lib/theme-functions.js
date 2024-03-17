import _ from 'lodash'

export const headerThemes = {
  light: 'light-navigation-theme',
  dark: 'dark-navigation-theme',
  scroll: 'scroll-navigation-theme'
}

export const sectionThemes = {
  light: 'light-section-theme',
  dark: 'dark-section-theme'
}

export const proseThemes = {
  primary: 'prose-primary',
  inverted: 'prose-primary-invert'
}

const arrLightTheme = ['default','primary-100','primary-200','primary-300','primary-400','primary-500','secondary-500','white','gray-50','gray-100','gray-200','gray-300','primary-600']
const arrDarkTheme = ['gray-400','gray-500','gray-600','gray-700','gray-800','gray-900','black','primary-700','primary-800','primary-900']

export const setHeaderColor = (sectionBgColor) => {
  if (_.includes(arrLightTheme, sectionBgColor))
    return headerThemes.light
  
  if (_.includes(arrDarkTheme, sectionBgColor))
    return headerThemes.dark
}

export const setSectionColor = (sectionBgColor) => {
  if(!sectionBgColor) {
    return sectionThemes.light
  }

  if (_.includes(arrLightTheme, sectionBgColor))
    return sectionThemes.light
  
  if (_.includes(arrDarkTheme, sectionBgColor))
    return sectionThemes.dark
}

export const setProseColor = (sectionBgColor) => {
  if(!sectionBgColor) {
    return proseThemes.primary
  }

  if (_.includes(arrLightTheme, sectionBgColor))
    return proseThemes.primary
  
  if (_.includes(arrDarkTheme, sectionBgColor))
    return proseThemes.inverted
}
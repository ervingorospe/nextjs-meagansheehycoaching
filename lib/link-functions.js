import _ from 'lodash'

export const itemLink = (item) => {
  return {
    name: _.get(item, 'fields.nav.text') ? _.get(item, 'fields.nav.text') : item.name,
    href: navLinkRouteName(item),
    target: _.get(item, 'fields.nav.target'),
    pageLink: _.get(item, 'fields.nav.url') ? false : _.get(item, 'fields.pageLink') ? true : false
  }
}

const navLinkRouteName = (item) => {
  return _.get(item, 'fields.nav.url') ? _.get(item, 'fields.nav.url') : _.get(item, 'fields.pageLink') ? _.get(item, 'fields.pageLink') : 
    _.get(item, 'fields.routeName') ? _.get(item, 'fields.routeName') : _.get(item, 'fields.slug') ? _.get(item, 'fields.slug') : linkNameFormat(item.name)
}

export const linkNameFormat = (name) => {
  return name.replaceAll(' ', '-').toLowerCase();
}

export const actionButtonLink = (item) => {
  return {
    name: _.get(item, 'fields.button.text') ? _.get(item, 'fields.button.text') : item.name,
    href: actionButtonRouteName(item),
    target: _.get(item, 'fields.button.target'),
    pageLink: _.get(item, 'fields.button.url') ? false : _.get(item, 'fields.buttonPageLink') ? true : false
  }
}

const actionButtonRouteName = (item) => {
  return _.get(item, 'fields.button.url') ? _.get(item, 'fields.button.url') : _.get(item, 'fields.buttonPageLink') ? _.get(item, 'fields.buttonPageLink') : linkNameFormat(item.name)
}

import _ from 'lodash'

export const sectionsComponent = (item) => {
  if (!_.get(item, 'fields.active')) {
    return null
  }

  if (_.get(item, 'fields.customType')) {
    return _.get(item, 'fields.customType').toLowerCase()
  }

  if (_.get(item, 'fields.type') === 'custom') {
    return _.get(item, 'name').toLowerCase()
  }

  return _.get(item, 'fields.type').toLowerCase()
}

export const formatComponentName = (name) => {
  const splitName = name.split(/\W+/);

  splitName.map((arr, index) => {
    return splitName[index] = arr.charAt(0).toUpperCase() + arr.slice(1)
  })

  return `${splitName.join("").replaceAll("[^A-Za-z0-9]","")}`
}
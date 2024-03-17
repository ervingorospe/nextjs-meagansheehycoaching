const url = 'https://fluxconsole.com/api/1269'

export const getCollection = async (id) => {
  return await (await fetch(`${url}?collection=${id}&fields=collections{items{name,id,parentId,sectionCollection,fields}}`)).json()
}

export const getMainFields = async () => {
  return await (await fetch(`${url}?fields=id,defaultMetaTitle,analyticsId,facebookId,organizationLegal,url`)).json()
}

export const getNavItem = async (id) => {
  return await (await fetch(`${url}?item=${id}&fields=items{id,parentId,name,fields}}`)).json()
}

export const getPageContent = async (id) => {
  return await (await fetch(`${url}?item=${id}&fields=items{id,parentId,name,fields,sectionItems}}`)).json()
}

export const getFacebookFeed = async (id, limit, token) => {
  return await (await fetch(`https://graph.facebook.com/ ${id}/posts?fields=permalink_url,attachments,created_time,message&limit=${limit}&access_token=${token}`)).json()
}
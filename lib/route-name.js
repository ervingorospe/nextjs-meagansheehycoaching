export const formatRouteName = (name) => {
  const routeName = name.replaceAll(' ', '-').toLowerCase();

  return  routeName;
}
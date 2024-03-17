export const getTiktokSrc = (embedCode) => {
  const splitEmbedCode = embedCode.split('"')
  return {
    scriptCode: splitEmbedCode[1],
    divCode: splitEmbedCode[3]
  }
}
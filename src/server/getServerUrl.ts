export const getServerUrl = (path: string) => {
  const host = 'http://localhost:3000'
  return [host, path].join('')
}

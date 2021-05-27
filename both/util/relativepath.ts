export const relativeTo = (path: string, prefix: string = "") : string =>
  '../'.repeat(path.split('/').length) + prefix + path + '/'

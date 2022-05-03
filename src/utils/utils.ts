const isDevEnv = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

// This function is created explicitly for github. For deployment on github, the url becomes https://bocovo.github.io/chall-country which makes chall-country the first segment of the url or the first segment is expected to be empty. This fakes React Router Dome routing. So it is to take this segment into account that this function is added
const productionPath = (path:string) => isDevEnv() ? path : "chall-country"+path

export {productionPath}
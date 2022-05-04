const port = 3001;
const version = "v1";
const basePath = `/api/${ version }`;
const baseUrl = `http://localhost:${ port }/api/${ version }`;
const docsEndpoint = "/api-docs";

module.exports = {
    port: port,
    apiPath: basePath,
    apiUrl: baseUrl,
    docsEndpoint: docsEndpoint,
    jwtSecret: 'yours_jwt_secret',
    jwtRefreshSecret: 'yours_jwt_refresh_secret',
    jwtExpiration: 60 * 60,        // 1 hour
    jwtRefreshExpiration: 60 * 60 * 24,   // 24 hours
}
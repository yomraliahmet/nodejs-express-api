const port = 3001;
const version = "v1";
const basePath = `/api/${ version }`;
const baseUrl = `http://localhost:${ port }/api/${ version }`;
const docsEndpoint = "/api-docs";

module.exports = {
    api_secret_key: 'yours_api_key',
    port: port,
    apiPath: basePath,
    apiUrl: baseUrl,
    docsEndpoint: docsEndpoint
}
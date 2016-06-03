/**
 * fetchData.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 03 Jun 2016
 */

export default (serviceUrl, endPoint) => {
    const url = createUrl(serviceUrl, endPoint);
    return fetch(url, { credentials: "same-origin" })
        .then(checkStatus)
        .then(parseJSON);
};

function createUrl(serviceUrl, endPoint) {
    const normalizedUrl = `${serviceUrl}${serviceUrl.endsWith("/") ? "" : "/"}`;
    return `${normalizedUrl}${endPoint}`;
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJSON(response) {
    return response.json();
}

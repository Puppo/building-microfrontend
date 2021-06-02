function downloadDocument(url, timeoutMs = 5000) {
  const request = new XMLHttpRequest();
  request.timeout = timeoutMs;
  request.responseType = "document";

  return new Promise((resolve, reject) => {
    request.onerror = () =>
      reject(new Error(`An error occurred while downloading ${url}`));
    request.ontimeout = () =>
      reject(new Error(`The following request did timeout: ${url}`));

    request.onload = () => {
      if (request.status >= 400) {
        reject(new Error(`Received HTTP Status ${request.status} for ${url}`));
      }
      resolve(request.response);
    };

    request.open("GET", url);
    request.send();
  });
}

export default downloadDocument;

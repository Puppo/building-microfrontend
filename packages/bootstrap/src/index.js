import config from "./config";
import download from "./download";
import mountMicroFrontendInPage from "./mount.js";

function getMicroFrontendNameFromPathname(pathname = window.location.pathname) {
  const [, microFrontendId] = pathname.split("/");
  const microFrontend = config.microFrontends.find(
    microFrontend => microFrontend.pathnameId === microFrontendId
  );

  if (!microFrontend) {
    return;
  }

  return microFrontend.name;
}

function getMicroFrontendEntryPointUrl(microFrontendName) {
  return `/mfe/${microFrontendName}/index.html`;
}

const microFrontendName = getMicroFrontendNameFromPathname();

if (!microFrontendName) {
  // TODO: load a "default" MFE
  throw new Error(
    "I don't know which Micro Frontend to load for the current URL :("
  );
}

const microFrontendEntryPointUrl =
  getMicroFrontendEntryPointUrl(microFrontendName);

download(microFrontendEntryPointUrl).then(microFrontendDocument =>
  mountMicroFrontendInPage(microFrontendName, microFrontendDocument)
);

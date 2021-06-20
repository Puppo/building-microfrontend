import config from "./config";
import download from "./download";
import { mountMicroFrontendInPage, unmountMicroFrontendInPage } from "./mount";

function getMicroFrontendNameFromPathname(pathname) {
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

const navigationHistory = [];

function navigateTo(pathname) {
  if (navigationHistory.length > 0) {
    unmountMicroFrontendInPage();
  }

  const microFrontendName = getMicroFrontendNameFromPathname(pathname);

  if (!microFrontendName) {
    // TODO: load a "default" MFE
    throw new Error(
      "I don't know which Micro Frontend to load for the current URL :("
    );
  }

  navigationHistory.push(pathname);
  window.history.pushState({}, "", pathname);

  const microFrontendEntryPointUrl =
    getMicroFrontendEntryPointUrl(microFrontendName);

  return download(microFrontendEntryPointUrl).then(microFrontendDocument =>
    mountMicroFrontendInPage(microFrontendName, microFrontendDocument)
  );
}

export { navigateTo };

function createPublicApi(navigateTo) {
  window.bootstrap = {
    router: {
      navigateTo,
    },
  };
}

export { createPublicApi };

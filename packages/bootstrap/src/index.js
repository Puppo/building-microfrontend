import { navigateTo } from "./router";
import { createPublicApi } from "./publicApi";

createPublicApi(navigateTo);

navigateTo(window.location.pathname);

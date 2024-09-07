import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

System.import("@psk/styleguide").then(() => {
  const { gg } = require("@psk/styleguide");
  console.log(gg);
  // Activate the layout engine once the styleguide CSS is loaded

  layoutEngine.activate();
  start();
});

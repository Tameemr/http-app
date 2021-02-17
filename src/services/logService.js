import Raven from "raven-js";

function init() {
  Raven.config(
    "https://abc5547d07d54becb4761816508c5572@o525506.ingest.sentry.io/5639776",
    {
      release: "1.0.0",
      environment: "test-Development",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};

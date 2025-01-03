import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  ReactGA.initialize("G-LYDSJ33T2D"); // Replace with your Measurement ID
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
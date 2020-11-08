import ReactGA from "react-ga";

const initializeAnalytics = () => {
  ReactGA.initialize("G-G4Y7QD6DXC");
};

const sendPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const sendLinkClick = (location, value) => {
  ReactGA.event({
    category: "Navigation",
    action: "Clicked an external link",
    label: location,
    value,
  });
};

export { initializeAnalytics, sendPageView, sendLinkClick };

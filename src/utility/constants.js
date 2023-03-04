const HREF = {
  INDEX: '/',
  ONLINE_ORDERING_PLATFORM: '/online-ordering-platform',
  LINKEDIN: 'https://www.linkedin.com/in/kyle-knaggs/',
  GITHUB: 'https://github.com/kyleknaggs',
  FIREFOX_DEBUGGER: 'https://bugzilla.mozilla.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&classification=Components&component=Debugger&email1=kyleknaggs%40gmail.com&emailassigned_to1=1&emailtype1=exact&list_id=15389168&product=DevTools&query_format=advanced&resolution=---&resolution=FIXED&resolution=INVALID&resolution=WONTFIX&resolution=INACTIVE&resolution=DUPLICATE&resolution=WORKSFORME&resolution=INCOMPLETE&resolution=SUPPORT&resolution=EXPIRED&resolution=MOVED',
  AFL_ONLINE_VIDEO: 'https://player.vimeo.com/video/455057785?app_id=122963&amp;wmode=opaque&amp;autoplay=1',
  QGIV: 'https://www.qgiv.com/',
  QGIV_DONATION_FORM: 'https://www.qgiv.com/donation-forms',
  QGIV_EVENTS: 'https://www.qgiv.com/events',
  QGIV_PEER_TO_PEER: 'https://www.qgiv.com/peer-to-peer-fundraising',
};

const TEXT = {
  // pages directory
  ONLINE_ORDERING_PLATFORM: {
    META_TITLE: 'Kyle Knaggs | Online Ordering Platform',
    META_DESCRIPTION: 'Online ordering platform for the largest mattress and foam manufacturer in the English-speaking Caribbean.',
    HERO: 'The design and development of an online ordering system for the largest mattress and foam manufacturer in the English-speaking Caribbean',
    NOTABLE_CONTRIBUTIONS_DESCRIPTION: 'Notable contributions that I made to this project included:',
    DESCRIPTION: 'As the largest mattress and foam manufacturer in the English speaking Caribbean, Advance Foam processes over 22,000 orders each year. With the launch of their new website in 2017, the company was eager to rethink how it traditionally accepted orders, a process that was not only burdensome on its customers, but on the company itself. After an intense period of research where each part of the order entry process was thoroughly documented and examined it became increasingly clear that a single page web application could help automate this time consuming and error prone process that was heavily reliant on human intervention. Once this decision was made, an ideal user flow was designed, mock ups were developed and the application was built with iterative feedback from stakeholders on a regular basis. The application processed its first order August 2018, and since then, many of the company’s major customers have adopted the web application as the primary means by which they create, place and manage orders. Product features were then added to the platform on a regular basis as a means of continually on-boarding new clients while simultaneously refining existing customers’ user experience.',
    ORDER_ENTRY_OLD_DESCRIPTION: 'Diagram of the order entry process before the development of a web application:',
    ORDER_ENTRY_OLD_ALT: 'Diagram of the order entry process before the introduction of the web application',
    ORDER_ENTRY_NEW_DESCRIPTION: 'Diagram of the order entry process after the development of a web application:',
    ORDER_ENTRY_NEW_ALT: 'Diagram of the order entry process after the introduction of the web application',
    FREEDOM_DESCRIPTION: 'Diagram of the user interface of Freedom, the software used by staff when entering orders manually:',
    FREEDOM_ALT: 'Diagram of the of the software used by staff for order entry',
    WORKING_ORDER_DESCRIPTION: 'Analysis of a single day of orders:',
    WORKING_ORDER_ALT: 'Table containing the data that was recorded for all of the orders placed during a single day',
    PRECEDENTS_DESCRIPTION: 'A selection of the interfaces that were evaluated and used as inspiration when designing the application’s UI:',
    PRECEDENT_DIAGRAM_DESCRIPTION: 'A sample of the analysis done when evaluating an existing user interface:',
    PRECEDENT_DIAGRAM_ALT: 'Diagram analyzing the layout of an Amazon product page',
    HOME_MOCKUP_DESCRIPTION: 'A high-fidelity mockup of the home page of the application:',
    HOME_MOCKUP_ALT: 'Mock up of the home page of the AFL Online web application',
    MOBILE_IMAGES_DESCRIPTION: 'Screenshots of the application on a mobile device simulated using Chrome’s Developer Tools:',
  },
  NOT_FOUND: {
    META_TITLE: 'Kyle Knaggs | 404 Page Not Found',
    META_DESCRIPTION: 'Unfortunately the page that you are looking for does not exist.',
    REASON: 'This is probably because either there is an error in the URL that you entered into the web browser or the page that you are looking for has since been moved or deleted.',
    NEXT_STEPS: 'Please check the URL that you entered into the web browser or return to the',
    HOMEPAGE_LINK: '/',
    HOMEPAGE_LINK_TEXT: 'homepage',
  },
  // components directory
  MOBILE_IMAGES: {
    ORDER_HISTORY_ALT: 'Screenshot of the Order History tab of the AFL Online web application on a mobile device',
    MATTRESS_AND_FOUNDATION_ALT: 'Screenshot of the Mattress and Foundation tab of the AFL Online web application on a mobile device',
    CUSTOM_REQUEST_ALT: 'Screenshot of the Custom Request tab of the AFL Online web application on a mobile device',
  },
  PRECEDENT_IMAGES: {
    AMAZON_PRECEDENT_ALT: 'Screenshot of the home page of Amazon\'s website',
    CASPER_PRECEDENT_ALT: 'Screenshot of the home page of the Casper\'s website',
    ALLY_PRECEDENT_ALT: 'Screenshot of the home page of Ally Financial\'s web application',
    TRADE_GECKO_PRECEDENT_ALT: 'Screenshot of the home page of Trade Gecko\'s website',
  },
  VIDEO: {
    AFL_ONLINE_VIDEO_DESCRIPTION: 'Screencast of typical user flow in Application. All prices have been blurred for confidentiality purposes.',
  },
  VIDEO_PLACEHOLDER: {
    AFL_ONLINE_SCREENSHOT_ALT: 'Screenshot of the log in portal for the AFL Online web application',
    PLAY_ICON_ALT: 'Play icon',
  },
  NOTABLE_CONTRIBUTIONS: {
    FIRST_BULLET: 'Driving the gathering of requirements by documenting and analyzing existing customer habits and internal order processing techniques, architecting the company’s transition from a manual to a digital order entry process.',
    SECOND_BULLET: 'Designing and developing high-fidelity mock-ups detailing the UI/UX of the application using Sketch. ',
    THIRD_BULLET: 'Architecting and building the entire view layer of the application, translating mock-ups into responsive React components optimized for both desktop and mobile devices.',
    FOURTH_BULLET: 'Designing and building the front-end of a date picker and a custom pagination component, both of which fetch small, targeted sets of data from the backend API enabling customers and internal users of the application to seamlessly navigate through the thousands of previously placed orders.',
    FIFTH_BULLET: 'Designing and the building the front-end of a modal with a typeahead input field that allows Sales Representatives and other internal users of the application to effortlessly switch between multiple customer accounts.',
  },
};

export { HREF, TEXT };

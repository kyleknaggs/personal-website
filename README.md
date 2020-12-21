# Kyle Knaggs - Personal Website

This website was built using Gatsby's [hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) and deployed using Netlify.

Once you clone this repository locally on your machine you can get the project up and running by:

1. Running `gatsby develop` in the Terminal.
2. Visiting `http://localhost:8000` in a web browser.

You can also visit an additional, second link `http://localhost:8000/___graphql` which may be useful when attempting to experiment and learn more about how you can use [GraphQL](https://graphql.org/) to query the website's data.

## Intent

This website is intended to act as a simple, extensible, and maintainable platform for me to house links to my resume and any additional work samples that I may have done in the past or may complete in the future.

My resume can easily be updated and uploaded to the website. The Selected Work section can contain external or internal links to additional projects that I may work on and want to showcase in the future. The Key Skills section can also be easily updated to reflect the technologies that best reflect my current skillset.

All of the pages on the website were also designed to aesthetically match my resume and be easily maintainable. This makes my resume and website appear as part of a cohesive visual package while also ensuring that any updates that I make to the website in the future should not be time-consuming or require significant technical overhead.

## Libraries

As this project was built with Gatsby, an open-source framework for building websites and applications, it also uses React.

In addition to Gatsby and React some important libraries that are also included in the project are:
1. [Styled Components](https://github.com/styled-components/styled-components): A CSS in JS library that makes it possible to style React components using template literals.
2. [React Helmet](https://github.com/nfl/react-helmet): A React component that enables you to make changes such as adding SEO metadata to the document head.
3. [React Icons](https://github.com/react-icons/react-icons): Makes it easy to include popular icons in a React project.

## Project Style Guide

To help ensure code consistency and quality, ESLint was set up and configured to use [AirBnB's official JavaScript Style Guide](https://github.com/airbnb/javascript). 

The style guide was added and further configured using `.eslintrc`. The modifications that were made to the style guide were minor and were intentionally done in order to make it easier when working on this project.

## Project Styling

Styles for this project are mostly written using JavaScript files using the Styled Components library.

In addition to the styles that were added to React components, the `Layout.css` file was used to configure site wide project styles such as fonts and CSS custom properties. It was also used to apply styles that were difficult to apply using CSS in JS because of nuances surrounding Styled Components.

The styles that were added to the webpages were mobile-first and have breakpoints that were derived from the responsive breakpoints associated with Bootstrap layouts and interfaces.

```css
/* Small devices (portrait phones, less than 576px) */
/* No media queries are associated with small devices as this is the default style in the project */

/* Medium devices (landscape phones, tablets and small desktops 576px and up) */
@media (min-width: 576px) { /* ... */ }

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { /* ... */ }
```

## Deployment

This website is currently being deployed in 2 separate locations:
1. https://kyleknaggs.com/: The official domain for my personal website.
2. https://kyle-knaggs-personal-website.netlify.app/: A Netlify subdomain assigned to all websites deployed using Netlify.

Netlify and GitHub have been configured so that any changes that are pushed to this repository will automatically be built and deployed on Netlify. As Netlify is not a Domain Name Registrar, and the https://kyleknaggs.com/ domain was originally purchased through Squarespace and you have to log into your Squarespace account if you want to perform tasks such as modifying DNS configuration when managing this domain.

Google Analytics has been also configured in order to monitor traffic on this webpage.

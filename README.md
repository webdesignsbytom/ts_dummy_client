# Client

Live Link [MyPlanet](https://myplanetview.netlify.app/)

## Table of Contents

- [Client](#client)
  - [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies](#technologies)
  - [Completing project](#completing-project)
  - [Versions](#versions)
  - [Analytics](#analytics)

## General Info

**Client** is....

## Technologies

1. React - Frontend framework
2. Tailwind - Style sheets
3. Axios - API management
4. Google OAuth - creating a login and sign up through google account.

## Completing project

Make a file structure
`find . -path './node_modules' -prune -o -path './logs' -prune -o -path './.git' -prune -o -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g' > file_structure.txt`

## Versions

Different branches are a base for different websites. All rely on the 'master' branch for basic struture.


## Analytics

The dummy comes with a set up for using google analytics.
Using the GA4 library `npm install react-ga4`

We create the useAnalytics hook to import a tracking helper into any page or component.

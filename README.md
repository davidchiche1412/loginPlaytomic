# LOGIN PLAYTOMIC

LOGIN PLAYTOMIC is a login page that moves into a Dashboard Admin area, which cannot be accessed without being logged in.

## Usage

For local usage:

```
npm run dev
```

## Tools

I have used [vite](https://vitejs.dev/) as build tool to serve the application.

For OAUTH services I have used [firebase](https://firebase.google.com/) 

And finally, for styling the application I have used [Semantic-UI-React](https://react.semantic-ui.com/)

I implemented two differents ways to log in, with Google account or a Github account, both served by Firebase.

In the Dashboard page, there is a very simple API that returns an random fox image. In the Settings page, there is a more useful API example. It returns all the public repositories of a GIT user (by default my own user).
<br/>
<img src="https://media.giphy.com/media/26gR0Dcj9gwzvy4H6/giphy.gif" alt="D.R.A.M" style= "border-radius: 90px; width: 250px"/>




- [Overview](#Gig-A-Bit)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

# Gig-A-Bit

_The talent-board app for artistic individuals and small groups_
<br>

**Gig-A-Bit** allows registered users to create, edit and delete posts related to specific topics for the purpose of attracting talent-seekers.

The focus of the app is to provide a space for talent to post project ideas, work availability and portfolio work so talent-seekers can get in touch  and employ/collaborate with talent.

<br>

## MVP

- Content (JSX/HTML) and styling (CSS) resembling the wireframes presented.
- A RESTful 'React on Rails' app with three relational tables
- Homepage displaying all posts from all users
- All site visitors can filter through all posts and contact a user through their post
- Filter can be applied on the homepage and user profile
- User should be able to create a profile and/or log in
- Logged In user can create a new post, edit and/or delete their own published posts and no one elses
- Logged In user has access to their profile where they can only see their posts on their profile.
- GET, SHOW, POST, PUT, and DESTROY API data via front-end (view).


### Goals

Create a full-stack app with CRUD functionality and user authentication

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Javascript library used to develop the front-end (client)_  |
|   React Router   | _Used for establishing links and routes for front-end components_ |
| Rails | _Ruby library used to develop the back-end server/api_ |
|     Axios    | _Used to make http requests from the front end_ |
|  JSON Web Tokens  | _Used to encode and decode payload for user authentication_ |
|Styled Components | _Used for writing CSS in react components vs a seperate stylesheet _

<br>

### Client (Front End)

#### Wireframes

Desktop View (via whimsical)
- https://whimsical.com/UKCsKBa2VwiMM5dD1Eyuw4

Mobile View (via whimsical)
- https://whimsical.com/Mw2B2VeXv6PinJvpepggQs


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy
```
src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ FilterBar.jsx
      |__ BodyContainer.jsx
      |__ PostList.jsx
      |__ Post.jsx
      |__ LogIn.jsx
      |__ CreateAcct.jsx
      |__ CreatePost.jsx
      |__ UpdatePost.jsx
|__ services/
      |__ apiConfig.js
      |__ postAPICall.js
      |__ userAPICall.js
|__ App.jsx
|__ index.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

<img src="./ERD.png" alt="entity relationship diagram" style= "border-radius: 5px; width: 350px"/>

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

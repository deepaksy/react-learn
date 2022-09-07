# ***React JS***

    React is a open source Javascript library for making user interfaces.

- React is not a framework.
- Focuses  on UI.
- Rich ecosystem


## ***Why Learn React?***

- Created and maintained by Facebook
- More than 100k starts on Github.
- Huge community.
- Indemand Skill

*Technical Aspects*:-

- Component based Architecture
- Reusable code
- Declarative
- Seamlessly ingeration of Application,single page.
- React native for mobile applications


## ***Pre-requisite***

- HTML, CSS and JavaScript fundamentals
- ES6
- JavaScript - "this" keyword, filter, map and reduce
- ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.


# Content - React JS

1. Fundamentals
2. HTTPGreet
3. Routing
4. Redux
5. Utilities



------------------------------------

# Create new React App

* To create A new React application/Project use following command

```node
npx create-react-app myapp
```

**local installation**

```
npx create-react-app <project_name>
```

**Global installation**
```
npm install create-react-app -g

create-react-app <project-name>
```


# Components

A component is a module which contains user interface.

* Components are usually a javascript file.


## Component types:- 

1. Stateless Functional Component
2. Stateful Class Components


1. Stateless Functional Component
    - They are javascript function that returns regular html

2. Stateful Class Component
    - Class extending Component
    - Render method returning HTML 

# Functional Vs Class Component

|   Functional Component   |  Class Component   |
|--------------------------|--------------------|
|   Simple functions       | More feature rich  |
|Use Func component as much as possible| Maintain their own private data- state}
| Absence of 'this' keyword| Complex UI Logic|
| Solution without using state| Provide lifecycle hooks|
| Mainly responsible for the UI||
|stateless/Dumb/Presentational|Statefull/Smart/Container|


## What is JSX?

    JSX Javascript XML - Extension to the JavaScript language syntax.

- Write XML-like code for elements and components.
- JSX tags have a tagname, attributes and children.
- JSX makes react code simpler and elegant.
- SX ultimately transpiles to pure JavaScript which is understood by the browsers.

### ***Props***
----------------

    Props are the optional input that are provided to a component for data or functionality.


## ***State**
---------------
    State is a initial values or position that are managed.


## State vs Props


|Props|State|
|----------------------|--------------------------|
|Props get passed to the component| State is managed witin the component|
|Functional parameters|Variable declared in the function body|
|props are immutable|state can be changed|
|props - Functional Components<br/>this.props-Class Components| useStae Hook- Functional Components<br/>this.state -Class Components|

## **Event Handling**
------------------------


## Method as Props
---------------------

## Conditional Rendering
_______________________

1. if/else
2. Element Variables
3. Ternary conditional operator
4. Short circuit operator


## Class Component LifeCycle Methods: - 

1. Mounting: - 
    * constructor
    * getDerivedStateFromProps
    * render
    * componentDidMount
2. Updating: -
    * static getDerivedStateFromProps
    * shouldComponentUpdate
    * render
    * getSnapshotBeforeUpdate
    * componentDidUpdate
3. Unmounting: -
    * componentWillUnmount
4. Error Handling: -
    * static getDerivedStateFromError
    * componentDidCatch
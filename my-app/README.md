# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Cypress

## Setting up Test

> npm install cypress --save-dev 

> ./node_modules/.bin/cypress open

## Writing tests

```
cypress
	- fixtures
	- integration
		-- todomvc_spec.js
```

```js
//todomvc_spec.js

describe('TodoMVC', function(){
	beforeEach(function(){
		cy.visit('http://localhost:8888')

		cy.get('.new-todo')
		  .type('buy some cheese {enter}')
		  .type('feed the cat {enter}')
		  .type('book a doctors appoinment {enter}')
	})

	it.only('hides "Clear Completed" with nothing checked', function(){
		cy.get('.todo-list li').eq(1).find('.toggle').check()
		cy.get('.clear-complet').should('be.visible').click()
		cy.get('.clear-completed').should('not.exist')
	})
})

```

## End-to-End

A typical E2E test visits the application in a browser and performs actions via the UI just like a real user would. 

```js
it('adds todos', () => {
	cy.visit('https://todo.app.com')
	cy.get('.net-input').type('write code{enter}').type('write tests{enter}')
	// confirm the application is showing two items
	cy.get('li.todo').should('have.length', 2)
})
```

## Components

Cypress could be used to mount components from some web frameworks and execute component test. 

```js
import { mount } from '@cypress/react'; //or @cypress/vue
import TodoList from './components/TodoList';

it('contains the correct number of todos', () => {
	const todos = [
		{ text: 'Buy milk', id: 1 },
		{ test: 'Learn testing', id: 2 },
	]

	mount(<TodoList todos={todos} />)

	// The component starts running like a mini web app
	cy.get('[data-testid=todos]').should('have.length', todos.length)
})

```

## API
Cypress can perform arbitrary HTTP calls, thus you can use it for API testing. 

```js
it('adds a todo', () => {
	cy.request({
		url: '/todos',
		method: 'POST',
		body:{
			title: 'Write REST API',
		},
	})

	.its('body')
	.should('deep.contain', {
		title: 'Write REST API',
		completed: false,
	})
})
```

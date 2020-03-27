# React App

## Steps
* Create pre setup for react app
  1. ```npx create-react-app moviebee```

* Setup for redux
  1. ```npm i redux redux-thunk react-redux```
  2. Create Redux folder inside src folder  and create 2 file 
    * reducer.js
    ```
    let initialState = {
      data: [],
    }

    export default function movie(state = initialState, action) {
      let stateCopy = JSON.parse(JSON.stringify(state));
      const { type, payload } = action;
      switch (type) {

        default: return stateCopy;
      }
    }
    ``` 
    * index.js
    ```
    import { Provider } from 'react-redux';
    import { combineReducers } from "redux";
    import data from './reducer';
    const rootReducer = combineReducers({
      movie: data,
    });
    
    export default rootReducer;
    ```
  3. Edit in src/index.js
  ```
  import rootReducer from './Redux/index';
  import { createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';

  // let store = createStore(rootReducer, applyMiddleware(thunk)) //if action return promise
  let store = createStore(rootReducer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider >,
    document.getElementById('root')
  );
  ```
  4. Create ActionCreator folder in src and create a file action.js
    * write your actions that should take your type of action to your reducer file as dispatch
* Setup Router
  1. `npm i react-router react-router-dom`
* Setup Bootstrap
  1. ```npm i bootstrap react-bootstrap react-router-bootstrap```
  2. [ReactJS Bootstrap](https://react-bootstrap.github.io/components/alerts/) for Documentation
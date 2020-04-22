import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/store'

import Posts from './components/posts'
import PostsForm from './components/postsForm'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostsForm />
      <Posts />
    </div>
      </Provider>
  );
}

export default App;

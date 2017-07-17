import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import { initStore } from './src/state/createStore';

exports.replaceServerBodyRender = ({ component: body }) => {

  const store = initStore();

  const ConnectedBody = () => (
    <Provider store={store}>
      {body}
    </Provider>
  )

  return {
    body: renderToString(<ConnectedBody/>),
  }
}

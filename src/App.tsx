import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Form from './components/Form';
import Table from './components/Table';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="px-5 py-3">
        <Form />
        <Table/>
      </div>
    </Provider>
  )
}
export default App
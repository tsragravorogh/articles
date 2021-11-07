import React from "react";
import ArticlesMain from "./modules/articles/containers/articles-main";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <ArticlesMain />
    </Provider>
  );
}

export default App;

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import articlesReducer from "../modules/articles/reducers/articles-reducer";
import { watchVectorCalculatingAsync } from "../modules/articles/sagas/acticles-sagas";

const combinedReducers = combineReducers({
  articles: articlesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchVectorCalculatingAsync);

export default store;

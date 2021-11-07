import { Article, Topic } from "../types/article-types";

const FETCH_ARTICLES_REQUESTED = "FETCH_ARTICLES_REQUESTED";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
const FETCH_ARTICLES = "FETCH_ARTICLES";

const ADD_ARTICLE_REQUESTED = "ADD_ARTICLE_REQUESTED";
const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";
const ADD_ARTICLE = "ADD_ARTICLE";

const OPEN_ADD_ARTICLE_MODAL = "OPEN_ADD_ARTICLE_MODAL";
const HIDE_ADD_ARTICLE_MODAL = "HIDE_ADD_ARTICLE_MODAL";

const SET_FETCH_BY_TOPIC_OPTION = "SET_FETCH_BY_TOPIC_OPTION";

const SET_ERROR = "SET_ERROR";

interface SetErrorAction {
  type: typeof SET_ERROR;
  error: string | null;
}
interface SetFetchByTopicOptionAction {
  type: typeof SET_FETCH_BY_TOPIC_OPTION;
  payload: Topic;
}
interface FetchArticlesRequestedAction {
  type: typeof FETCH_ARTICLES_REQUESTED;
}
interface FetchArticlesSuccessAction {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: Article[];
}
interface FetchArticlesFailureAction {
  type: typeof FETCH_ARTICLES_FAILURE;
  error: string;
}
export interface FetchArticlesAction {
  type: typeof FETCH_ARTICLES;
  payload: Topic;
}

interface AddArticleRequestedAction {
  type: typeof ADD_ARTICLE_REQUESTED;
}
interface AddArticleSuccessAction {
  type: typeof ADD_ARTICLE_SUCCESS;
}
interface AddArticleFailureAction {
  type: typeof ADD_ARTICLE_FAILURE;
  error: string;
}
export interface AddArticleAction {
  type: typeof ADD_ARTICLE;
  payload: any;
}

interface OpenAddArticleModalAction {
  type: typeof OPEN_ADD_ARTICLE_MODAL;
}
interface HideAddArticleModalAction {
  type: typeof HIDE_ADD_ARTICLE_MODAL;
}

export type ArticleActionTypes =
  | FetchArticlesRequestedAction
  | FetchArticlesSuccessAction
  | FetchArticlesFailureAction
  | AddArticleRequestedAction
  | AddArticleSuccessAction
  | AddArticleFailureAction
  | OpenAddArticleModalAction
  | HideAddArticleModalAction
  | SetFetchByTopicOptionAction
  | SetErrorAction;

const setError = (error: string | null): ArticleActionTypes => ({
  type: SET_ERROR,
  error,
});

const fetchArticlesRequested = (): ArticleActionTypes => ({
  type: FETCH_ARTICLES_REQUESTED,
});
const fetchArticlesSuccess = (payload: Article[]): ArticleActionTypes => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload,
});
const fetchArticlesFailure = (error: string): ArticleActionTypes => ({
  type: FETCH_ARTICLES_FAILURE,
  error,
});

const addArticleRequested = (): ArticleActionTypes => ({
  type: ADD_ARTICLE_REQUESTED,
});
const addArticleSuccess = (): ArticleActionTypes => ({
  type: ADD_ARTICLE_SUCCESS,
});
const addArticleFailure = (error: string): ArticleActionTypes => ({
  type: ADD_ARTICLE_FAILURE,
  error,
});

const addArticle = (payload: any): AddArticleAction => ({
  type: ADD_ARTICLE,
  payload,
});

const fetchArticles = (payload: Topic): FetchArticlesAction => ({
  type: FETCH_ARTICLES,
  payload,
});

const setFetchByTopicOption = (payload: Topic): ArticleActionTypes => ({
  type: SET_FETCH_BY_TOPIC_OPTION,
  payload,
});

const hideAddArticleModal = (): ArticleActionTypes => ({
  type: HIDE_ADD_ARTICLE_MODAL,
});

const openAddArticleModal = (): ArticleActionTypes => ({
  type: OPEN_ADD_ARTICLE_MODAL,
});

export {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_REQUESTED,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLE,
  FETCH_ARTICLES_SUCCESS,
  ADD_ARTICLE_FAILURE,
  FETCH_ARTICLES_REQUESTED,
  HIDE_ADD_ARTICLE_MODAL,
  OPEN_ADD_ARTICLE_MODAL,
  FETCH_ARTICLES,
  SET_FETCH_BY_TOPIC_OPTION,
  SET_ERROR,
  fetchArticlesRequested,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  addArticleRequested,
  addArticleSuccess,
  addArticleFailure,
  addArticle,
  fetchArticles,
  setFetchByTopicOption,
  hideAddArticleModal,
  openAddArticleModal,
  setError,
};

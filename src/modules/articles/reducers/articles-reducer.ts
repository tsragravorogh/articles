import {
  ADD_ARTICLE_FAILURE,
  ADD_ARTICLE_REQUESTED,
  ADD_ARTICLE_SUCCESS,
  ArticleActionTypes,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_REQUESTED,
  FETCH_ARTICLES_SUCCESS,
  HIDE_ADD_ARTICLE_MODAL,
  OPEN_ADD_ARTICLE_MODAL,
  SET_FETCH_BY_TOPIC_OPTION,
} from "../actions/articles";
import { Article, Topic } from "../types/article-types";

export interface ArticlesReducerStateInterface {
  articles: Article[];
  isAddArticleModalOpen: boolean;
  fetchByTopicOption: Topic;
  articlesLoading: false;
  error: string | null;
}

const defaultState: ArticlesReducerStateInterface = {
  articles: [],
  isAddArticleModalOpen: false,
  fetchByTopicOption: Topic.ALL,
  articlesLoading: false,
  error: null,
};

const articlesReducer = (
  state: ArticlesReducerStateInterface = defaultState,
  action: ArticleActionTypes
) => {
  switch (action.type) {
    case ADD_ARTICLE_REQUESTED:
      return { ...state, articlesLoading: true };
    case ADD_ARTICLE_SUCCESS:
      return { ...state, articlesLoading: false, isAddArticleModalOpen: false };
    case ADD_ARTICLE_FAILURE:
      return { ...state, articlesLoading: false };
    case FETCH_ARTICLES_REQUESTED:
      return { ...state, articlesLoading: true };
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articlesLoading: false, articles: action.payload };
    case FETCH_ARTICLES_FAILURE:
      return { ...state, articlesLoading: false, error: action.error };
    case OPEN_ADD_ARTICLE_MODAL:
      return { ...state, isAddArticleModalOpen: true };
    case HIDE_ADD_ARTICLE_MODAL:
      return { ...state, isAddArticleModalOpen: false };
    case SET_FETCH_BY_TOPIC_OPTION:
      return { ...state, fetchByTopicOption: action.payload };
    default:
      return state;
  }
};

export default articlesReducer;

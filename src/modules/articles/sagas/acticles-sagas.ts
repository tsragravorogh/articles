import { put, call, takeEvery } from "redux-saga/effects";
import {
    ADD_ARTICLE,
    AddArticleAction,
    addArticleFailure,
    addArticleRequested,
    addArticleSuccess, FETCH_ARTICLES,
    FetchArticlesAction,
    fetchArticlesFailure,
    fetchArticlesRequested,
    fetchArticlesSuccess,
} from "../actions/articles";
import { Article, Topic } from "../types/article-types";
import { addArticle, getAllArticles } from "../../../rest";

function* fetchArticlesAsync(action: FetchArticlesAction) {
  try {
    const { payload: topic } = action;
    yield put(fetchArticlesRequested());
    const response: Article[] = yield call(() =>
      getAllArticles(topic !== Topic.ALL ? topic : undefined)
    );
    yield put(fetchArticlesSuccess(response));
  } catch (error: any) {
    yield put(
      fetchArticlesFailure(
        error?.response?.data?.message || "Error during fetching articles"
      )
    );
  }
}

function* putArticleAsync(action: AddArticleAction) {
  try {
    const { payload } = action;
    yield put(addArticleRequested());
    yield call(() => addArticle(payload));
    yield put(addArticleSuccess());
  } catch (error: any) {
    yield put(
      addArticleFailure(
        error?.response?.data?.message || "Failed to add new article"
      )
    );
  }
}

export function* watchVectorCalculatingAsync() {
  yield takeEvery(FETCH_ARTICLES, fetchArticlesAsync);
    yield takeEvery(ADD_ARTICLE, putArticleAsync);
}

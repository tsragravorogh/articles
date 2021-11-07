import { connect } from "react-redux";
import { StateType } from "../../../redux/state-type";
import ArticlesMain from "../components/articles-main";
import {
  addArticle,
  fetchArticles,
  setFetchByTopicOption,
  openAddArticleModal,
  hideAddArticleModal,
  setError,
} from "../actions/articles";

const mapStateToProps = (state: StateType) => {
  const {
    articles,
    articlesLoading,
    fetchByTopicOption,
    isAddArticleModalOpen,
    error,
  } = state.articles;
  return {
    articles,
    articlesLoading,
    fetchByTopicOption,
    isAddArticleModalOpen,
    error,
  };
};

const mapDispatchToProps = {
  fetchArticles,
  setFetchByTopicOption,
  addArticle,
  openAddArticleModal,
  hideAddArticleModal,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesMain);

import React, { useEffect, useState } from "react";
import { Article, possibleTopics, Topic } from "../types/article-types";
import { Button, Col, message, Modal, Row, Select, Spin, Upload } from "antd";
import SingleArticle from "./single-article";
import { InboxOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Option } = Select;
const { Dragger } = Upload;

interface ArticlesMainProps {
  articles: Article[];
  articlesLoading: boolean;
  fetchByTopicOption: Topic;
  isAddArticleModalOpen: boolean;
  fetchArticles: (topic: Topic) => void;
  setFetchByTopicOption: (topic: Topic) => void;
  addArticle: (data: any) => void;
  openAddArticleModal: () => void;
  hideAddArticleModal: () => void;
  error: string | null;
  setError: (err: string | null) => void;
}

const ArticlesMain = (props: ArticlesMainProps) => {
  const {
    articlesLoading,
    fetchArticles,
    hideAddArticleModal,
    articles,
    fetchByTopicOption,
    isAddArticleModalOpen,
    openAddArticleModal,
    setFetchByTopicOption,
    addArticle,
    error,
    setError
  } = props;

  useEffect(() => {
    error && message.error(error);
  }, [error]);

  useEffect(() => {
    fetchArticles(fetchByTopicOption);
  }, [fetchArticles, fetchByTopicOption]);

  const [openedCards, setOpenedCards] = useState<string[]>([]);

  const draggerProps = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/api/addArticle",
    showUploadList: false,
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        fetchArticles(fetchByTopicOption);
        hideAddArticleModal();
      } else if (status === "error") {
        // CHANGE MESSAGE HERE IF YOU NEED
        message.error(info.file?.response?.error || `${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Container>
      <StyledRow justify={"space-between"}>
        <Col>
          <Select
            value={fetchByTopicOption}
            onSelect={(v) => setFetchByTopicOption(v)}
            style={{ width: "200px" }}
          >
            {possibleTopics.map((topic) => (
              <Option value={topic} key={topic}>
                {topic}
              </Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Button
            onClick={() => {
              openAddArticleModal();
            }}
          >
            Add New Article
          </Button>
        </Col>
      </StyledRow>
      {articlesLoading ? (
        <SpinWrapper>
          <Spin size={"large"} />
        </SpinWrapper>
      ) : (
        <div>
          {articles.map((article) => (
            <SingleArticle
              article={article}
              opened={!!openedCards.find((card) => article.id === card)}
              open={() => setOpenedCards([...openedCards, article.id])}
              hide={() =>
                setOpenedCards(
                  openedCards.filter((card) => card !== article.id)
                )
              }
            />
          ))}
        </div>
      )}
      <StyledModal
        centered={true}
        visible={isAddArticleModalOpen}
        onCancel={hideAddArticleModal}
        style={{ padding: "20px" }}
      >
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </StyledModal>
    </Container>
  );
};

const StyledRow = styled(Row)`
  padding: 20px 0;
`;

const Container = styled.div`
  padding: 20px;
`;

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding-top: 40px;
  }
`;

const SpinWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default ArticlesMain;

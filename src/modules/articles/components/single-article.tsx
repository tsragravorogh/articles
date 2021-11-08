import React from "react";
import { Article, MAX_CARD_BODY_SYMBOLS } from "../types/article-types";
import { Button, Card } from "antd";
import styled from "styled-components";

interface SingleArticleProps {
  article: Article;
  opened: boolean;
  open: Function;
  hide: Function;
}

const SingleArticle = (props: SingleArticleProps) => {
  const { article, open, opened, hide } = props;

  const content =
    article.body.length > MAX_CARD_BODY_SYMBOLS && !opened
      ? article.body.slice(0, MAX_CARD_BODY_SYMBOLS) + "..."
      : article.body;
  return (
    <StyledCard
      size="small"
      title={`${article.title} | ${article.topic}`}
      extra={
        <Button onClick={() => (opened ? hide() : open())}>
          Show {opened ? "Less" : "More"}
        </Button>
      }
    >
      <p>{content}</p>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin: 20px 0;
`;

export default SingleArticle;

const MAX_CARD_BODY_SYMBOLS = 50;

export interface Article {
  id: string;
  title: string;
  body: string;
  createdDt: string;
  topic: string;
}

export enum Topic {
  ALL = "All",
  SPORT = "Sport",
  FINANCE = "Finance",
  TRAVEL = "Travel",
  POLITICS = "Politics",
}

const possibleTopics = [
  Topic.ALL,
  Topic.POLITICS,
  Topic.SPORT,
  Topic.TRAVEL,
  Topic.FINANCE,
];

export { possibleTopics, MAX_CARD_BODY_SYMBOLS };

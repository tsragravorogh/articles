import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
});

const getAllArticles = async (topic: string | undefined) => {
  const response = await request.get(
    `/api/getAllArticles${topic ? `/${topic}` : ""}`
  );
  return response.data;
};

const addArticle = async (data: any) => {
  const response = await request.post("/api/addArticle", data);
  return response.data;
};

export { getAllArticles, addArticle };

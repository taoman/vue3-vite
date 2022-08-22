export interface ArticleIndex {
  data: ArticleIndexData[];
  status: number;
  message: string;
}
export interface ArticleDetail{
  data: ArticleIndexData;
  statusCode: number;
  message: string;
}
export interface ArticleIndexData {
  id: number;
  name: string;
  avatar: string;
  create_time: string;
  content: string;
}
export interface ArticleStoreData {
  avatar: string;
  name: string;
  content?: string;
}

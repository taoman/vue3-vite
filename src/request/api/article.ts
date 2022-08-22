
import { request } from '../http'
// import { HttpBase } from 'src/interface'
import { ArticleDetail, ArticleIndex, ArticleStoreData } from 'src/interface/article'

export const articleIndex = async (key?:string) => {
  const res = await request<ArticleIndex>({
    url: 'article',
    queryParameters: { key }
  })
  res.data.forEach(item => (item.create_time = item.create_time.substring(0, 10)))
  return res
}

export const articleStore = (data:ArticleStoreData) => request<ArticleDetail>({
  url: 'article/create',
  method: 'POST',
  data
})

export const articleDetail = (id:number) => request<ArticleDetail>({
  url: `article/${id}`
})

export const deleteDetail = (id:number) => request <ArticleDetail>({
  url: `article/${id}`,
  method: 'DELETE'
})

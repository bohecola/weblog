import request from '@/service/request';

export function getArticleList() {
  return request({
    url: '/articles',
    method: 'get'
  });
}

export function getArticleDetail(param: string) {
  return request({
    url: `/articles/${param}`,
    method: 'get',
  });
}
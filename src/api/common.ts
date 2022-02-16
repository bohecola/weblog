import request from '@/service/request';

export function getArticleList(param?: any) {
  return request({
    url: '/articles',
    method: 'get',
    params: param
  });
}

export function getCategoryList() {
  return request({
    url: '/category',
    method: 'get'
  });
}

export function getTagList() {
  return request({
    url: '/tags',
    method: 'get'
  });
}

export function getArticleOne(param: string) {
  return request({
    url: `/articles/${param}`,
    method: 'get',
  });
}

export function getUserInfo() {
  return request({
    url: '/me',
    method: 'get'
  })
}
import request from '@/service/request';

export function getArticleList() {
  return request({
    url: '/articles',
    method: 'get'
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

export function getArticleDetail(param: string) {
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
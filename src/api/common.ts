import request from '@/service/request';

export const getArticleList = (params?: unknown) => 
  request({
    url: '/articles',
    method: 'get',
    params
  })

export const getArchiveList = () =>
  request({
    url: '/archive',
    method: 'get'
  })

export const getCategoryList = () => 
  request({
    url: '/category',
    method: 'get'
  })

export const getTagList = () => 
  request({
    url: '/tags',
    method: 'get'
  })

export const getArticleOne = (param: string) => 
  request({
    url: `/articles/${param}`,
    method: 'get',
  })

export const getUserInfo = () => 
  request({
    url: '/me',
    method: 'get'
  })

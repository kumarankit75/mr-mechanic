import API from './axios'

export const fetchServices = async (category = 'all', search = '') => {
  const params = {}
  if (category !== 'all') params.category = category
  if (search) params.search = search
  const res = await API.get('/services', { params })
  return res.data
}
import API from './axios'

export const createBooking = async (data) => {
  const res = await API.post('/bookings', data)
  return res.data
}

export const getMyBookings = async () => {
  const res = await API.get('/bookings/my')
  return res.data
}

export const cancelBooking = async (id) => {
  const res = await API.patch(`/bookings/${id}/cancel`)
  return res.data
}
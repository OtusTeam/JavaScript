import type { User } from '@/shared/types/User'

interface GetUsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export const getUsers = async (): Promise<GetUsersResponse> => {
  const response = await fetch('https://dummyjson.com/users')
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

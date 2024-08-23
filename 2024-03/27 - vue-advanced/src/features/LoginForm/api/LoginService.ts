interface LoginPayload { username: string, password: string, expiresInMins?: number}

interface LoginResponse {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  username: string;
  token: string;
}

export const login = async ({ username, password, expiresInMins }: LoginPayload): Promise<LoginResponse> => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      expiresInMins
    })
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

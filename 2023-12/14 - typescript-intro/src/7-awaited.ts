interface User {
  id: number
  username: string
}

type UserId = User['id'] // .id не сработает

const fetchUsers = async () => {
  return await {
    data: [
      {
        id: 1,
        username: 'student',
      },
    ] as User[],
    meta: {
      total: 10,
      limit: 1,
    },
  }
}

let users: Awaited<ReturnType<typeof fetchUsers>>['data'] = []
;(async () => {
  const response = await fetchUsers()
  users.push(...response.data)
  console.log(users)
})()

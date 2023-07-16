type UserItem = {
    username: string,
    image: string
}

export const userItem: UserItem[] = [
    {
        username: 'asa',
        image: '/pfps/demo-pfp.jpeg'
    },
    {
        username: 'Cpfist',
        image: '/pfps/demo-pfp2.jpeg'
    },
]

export const duplicatedUserItems = (users: UserItem[]) => {
    let duplicatedUsers: UserItem[] = []
    for (let i = 0; i < 10; i++) {
        duplicatedUsers = duplicatedUsers.concat(users)
    }
    return duplicatedUsers
}
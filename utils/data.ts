import { UserItem, Song } from './types'

export const userItem: UserItem[] = [
    {
        username: 'asa',
        image: '/pfps/demo-pfp.jpeg'
    },
    {
        username: 'Cpfist',
        image: '/pfps/demo-pfp2.jpeg'
    },
    {
        username: 'jmurphy5613',
        image: '/pfps/johntransparent.png'
    }
]

export const duplicatedUserItems = (users: UserItem[]) => {
    let duplicatedUsers: UserItem[] = []
    for (let i = 0; i < 5; i++) {
        duplicatedUsers = duplicatedUsers.concat(users)
    }
    return duplicatedUsers
}

export const tempSong: Song = {
    name: "Rose Tint",
    artist: [{ name: "amol" }],
    album: {
        images: [{ url: "https://i.scdn.co/image/ab67616d0000b273b783917ab62dea2ca3063fea" }]
    }
}

export const tempSongs: Song[] = [
    {
        name: "Rose Tint",
        artist: [{ name: "amol" }],
        album: {
            images: [{ url: "https://i.scdn.co/image/ab67616d0000b273b783917ab62dea2ca3063fea" }]
        }
    },
    {
        name: "Rose Tint",
        artist: [{ name: "amol" }],
        album: {
            images: [{ url: "https://i.scdn.co/image/ab67616d0000b273b783917ab62dea2ca3063fea" }]
        }
    },
    {
        name: "Rose Tint",
        artist: [{ name: "amol" }],
        album: {
            images: [{ url: "https://i.scdn.co/image/ab67616d0000b273b783917ab62dea2ca3063fea" }]
        }
    },
]

import { UserItem, Song, User } from './types'

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

export const duplicatedUserItems = (users: User[]) => {
    let duplicatedUsers: User[] = []
    for (let i = 0; i < 25; i++) {
        duplicatedUsers = duplicatedUsers.concat(users)
    }
    return duplicatedUsers
}

// OLD TEMP SONGS FOR DATA TESTING 

// export const tempSong: Song = {
//     name: "Rose Tint",
//     artists: [{ name: "amol" }],
//     album: {
//         images: [{ url: "https://i.scdn.co/image/ab67616d0000b273b783917ab62dea2ca3063fea" }]
//     },
//     preview_url: "https://p.scdn.co/mp3-preview/3160a9aa784dd0a9b362dd8c13314121c56f02db?cid=0b297fa8a249464ba34f5861d4140e58",
//     id: ''
// }

// export const tempSong2: Song = {
//     name: "Nights",
//     artists: [{ name: "Frank Ocean" }],
//     album: {
//         images: [{ url: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526" }]
//     },
//     preview_url: "https://p.scdn.co/mp3-preview/478a51ff059dc1abb20548ac2f3d3d73d75c3cb7?cid=0b297fa8a249464ba34f5861d4140e58",
//     id: ''
// }

export interface SpotifyAuthResponse {
    access_token: string,
    token_type: string,
    scope: string,
    expires_in: number,
    refresh_token: string
}

export interface Song {
    album: {
        images: Array<{
            url: string
        }>,
        name: string
    },
    name: string,
    artists: Array<{
        name: string
    }>,
    preview_url: string,
    id: string,
    uri: string,
    duration_ms: number
}

export interface UserItem {
    username: string,
    image: string
}

export interface PlayableTrack {
    song: Song,
    instances: number,
    playlists: string[]
}

export interface UserInfo {
    display_name: string,
    followers: {
        href: string,
        total: number
    },
    images: Array<{
        url: string,
        height: number,
        width: number
    }>,
    id: string
}

export interface HistoryItem {
    id: number,
    title: string,
    artist: string,
    album: string,
    albumArt: string,
    uri: string,
    liked: boolean,
    duration: number
}

export interface User {
    id: number,
    spotifyId: string,
    displayName: string,
    profilePicture: string
}
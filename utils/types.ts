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
        }>
    },
    name: string,
    artist: Array<{
        name: string
    }>,
    preview_url: string,
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
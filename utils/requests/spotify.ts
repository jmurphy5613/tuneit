import axios from "axios";
import { Song, UserInfo } from "../types";
import { playlistImageBase64 } from "../constants";

export const getUserData = async (access_token?: string): Promise<UserInfo> => {
    const options = {
        url: "https://api.spotify.com/v1/me",
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + `${access_token ? access_token : localStorage.getItem('accessToken')}`
        }
    }

    const response = await axios(options)
    return response.data
}

export const getTopTracks = async (access_token?: string): Promise<Song[]> => {
    const options = {
        url: "https://api.spotify.com/v1/me/top/tracks",
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + `${access_token ? access_token : localStorage.getItem('access_token')}`
        },
        params: {
            limit: 10,
            time_range: "short_term",
            offset: 0
        }
    }

    const response = await axios(options)
    return response.data.items
}

export const getRecommendations = async (seedTracks: Song[]) => {
    const options = {
        url: "https://api.spotify.com/v1/recommendations",
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        params: {
            // seed_tracks: seedTracks.map(track => track.id).join(','),
            limit: 30,
            seed_tracks: '6zeeWid2sgw4lap2jV61PZ,2rRBApKlGWNfUfd3rDzQ77'
        }
    }

    const response = await axios(options)
    //filter out songs that don't have a preview url
    const filteredTracks = response.data.tracks.filter((track: Song) => track.preview_url !== null)
    return filteredTracks
}

export const createPlaylist = async (spotify_id: string) => {
    const options = {
        url: `https://api.spotify.com/v1/users/${spotify_id}/playlists`,
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        data: {
            name: "Tuneit Playlist",
            description: "This playlist was created by Tuneit, a platform for finding new music. \n https://tuneit.vercel.app/",
            public: false
        }
    }

    const response = await axios(options)
    return response.data
}

export const uploadPlaylistImage = async (playlist_id: string) => {
    const options = {
        url: `https://api.spotify.com/v1/playlists/${playlist_id}/images`,
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'image/jpeg'
        },
        data: playlistImageBase64
    }

    const response = await axios(options)
    return response.data
}

export const addTrackToPlaylist = async (playlist_id: string, track_uri: string) => {
    const options = {
        url: `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        },
        params: {
            uris: track_uri
        }
    }

    const response = await axios(options)
    return response.data
}

export const getUsersPlaylistItems = async (): Promise<Song []> => {
    const options = {
        url: `https://api.spotify.com/v1/playlists/${localStorage.getItem('playlist_id')}/tracks`,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        },
        params: {
            limit: 100
        }
    }

    const response = await axios(options)
    const tracks: Song[] = []
    for (const item of response.data.items) {
        tracks.push(item.track)
    }
    return tracks
}

export const removeTrackFromPlaylist = async (track_uri: string) => {
    const options = {
        url: `https://api.spotify.com/v1/playlists/${localStorage.getItem('playlist_id')}/tracks`,
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        },
        data: {
            tracks: [
                {
                    uri: track_uri
                }
            ]
        }
    }

    const response = await axios(options)
    return response.data
}
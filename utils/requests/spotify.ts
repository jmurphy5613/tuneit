import axios from "axios";
import { Song, UserInfo } from "../types";

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
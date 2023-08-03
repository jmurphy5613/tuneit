import axios from "axios";
import { Song, UserInfo } from "../types";

export const getUserBySpotifyId = async (spotify_id: string) => {
    const options = {
        url: `http://localhost:3001/users/getBySpotifyId/${spotify_id}`,
        method: "GET"
    }

    const response = await axios(options)
    return response.data
}

export const createUser = async (userInfo: UserInfo) => {
    console.log(userInfo)
    const options = {
        url: `http://localhost:3001/users/create`,
        method: "POST",
        data: {
            spotifyId: userInfo.id,
            displayName: userInfo.display_name
        }
    }

    const response = await axios(options)
    return response.data
}

export const addSongToHistory = async (song: Song, reaction: string) => {

    const options = {
        url: `http://localhost:3001/users/createHistoryItem/${localStorage.getItem('user_id')}`,
        method: "POST",
        data: {
            title: song.name,
            artist: song.artists[0].name,
            album: song.album.name,
            albumArt: song.album.images[0].url,
            uri: song.uri,
            liked: reaction === 'like' ? true : false,
            duration: song.duration_ms
        }
    }

    const response = await axios(options)
    return response.data
}     
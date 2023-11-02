import axios from "axios";
import { HistoryItem, Song, User, UserInfo } from "../types";
import { apiURL } from "../constants";

export const getAllUsers = async () : Promise<User[]> => {
    const options = {
        url: `${apiURL}/users/get-all`,
        method: "GET"
    }
    const response = await axios(options)
    return response.data
}

export const getUserBySpotifyId = async (spotify_id: string) => {
    const options = {
        url: `${apiURL}/users/getBySpotifyId/${spotify_id}`,
        method: "GET"
    }

    const response = await axios(options)
    return response.data
}

export const getUserById = async (id: number) => {
    const options = {
        url: `${apiURL}/users/getById/${id}`,
        method: "GET"
    }
    const response = await axios(options)
    return response.data
}

export const createUser = async (userInfo: UserInfo, playlist_id: string): Promise<User> => {

    const getUserPfp = () => {
        if(userInfo.images.length > 0) {
            return userInfo.images[0].url
        }
        return ""
    }
    console.log(userInfo)
    const options = {
        url: `${apiURL}/users/create`,
        method: "POST",
        data: {
            spotifyId: userInfo.id,
            displayName: userInfo.display_name,
            playlistId: playlist_id,
            profilePicture: getUserPfp()
        }
    }

    const response = await axios(options)
    return response.data
}

export const addSongToHistory = async (song: Song, reaction: string) => {
    const options = {
        url: `${apiURL}/users/createHistoryItem/${localStorage.getItem('user_id')}`,
        method: "POST",
        data: {
            title: song.name,
            artist: song.artists[0].name,
            album: song.album.name,
            albumArt: song.album.images[0].url,
            uri: song.uri,
            liked: reaction === 'yes' ? true : false,
            duration: song.duration_ms
        }
    }

    const response = await axios(options)
    return response.data
}     

export const getHistoryFromUser = async (user_id: number): Promise<HistoryItem[]> => {
    const options = {
        url: `${apiURL}/users/getHistoryItems/${user_id}`,
        method: "GET"
    }

    const response = await axios(options)
    return response.data
}
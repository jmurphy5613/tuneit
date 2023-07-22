import axios from "axios";
import { UserInfo } from "../types";

export const getUserBySpotifyId = async (spotify_id: string) => {
    const options = {
        url: `http://localhost:3001/users/getBySpotifyId/${spotify_id}`,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    }

    const response = await axios(options)
    return response.data
}

export const createUser = async (userInfo: UserInfo) => {
    console.log(userInfo)
    const options = {
        url: `http://localhost:3001/users/create`,
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        },
        data: {
            spotifyId: userInfo.id,
            displayName: userInfo.display_name
        }
    }

    const response = await axios(options)
    return response.data
}
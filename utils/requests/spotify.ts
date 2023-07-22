import axios from "axios";
import { UserInfo } from "../types";

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


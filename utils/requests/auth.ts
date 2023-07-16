import { NextRouter } from "next/router";
import { url } from "../constants";
import axios from "axios";
import { SpotifyAuthResponse } from "../types";

export const auth = async (router: NextRouter) => {
	let URL = "https://accounts.spotify.com/authorize"
	URL += "?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID
	URL += "&response_type=code"
	URL += "&redirect_uri=" + url
	URL += "&show_dialog=true"
	URL += "&scope=user-read-private user-read-email user-top-read user-read-recently-played"
	router.push(URL);
};

export const getAccessToken = async (code: string): Promise<SpotifyAuthResponse> => {
    const options = {
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
            "Authorization": "Basic " + Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_CLIENT_SECRET).toString("base64")
        },
        params: {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: url
        }
    }

    const response = await axios(options)
    return response.data
}

export const refreshAccessToken = async (refreshToken: string): Promise<SpotifyAuthResponse> => {
    const options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID
        }
    }

    const res = await axios(options)
    return res.data
}
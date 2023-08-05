import { NextRouter } from "next/router";


export const logout = (router: NextRouter, redirect: string) => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('playlist_id')
    router.push(redirect)
}
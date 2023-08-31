import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { url } from '@/utils/constants'

type Data = {
  response: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    console.log(req.query.code)

    const options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        params: {
            code: req.query.code,
            redirect_uri: url,
            grant_type: 'authorization_code'
        }
    }

    const makeRequest = async () => {
        let result
        await axios(options)
        .then((res) => {
            result = res.data
        })
        .catch((err) => {
            console.log('err', err)
        })
        return result
    }

    res.status(200).json({ response: await makeRequest() })

}
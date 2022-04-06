// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({name: 'John Doe'})
}

// const production = process.env.NODE_ENV === "production";
//
// export const url = production
//     ? "https://admin.kraevskiy-web.ru/api/"
//     : "https://localhost:1337/api/";
export const url = "https://warm-plains-44935.herokuapp.com/api/";

export const addLike = (id: number, likes: number) => {
    const likesCount = {
        data: {
            attributes: {
                likes: likes + 1,
            }
        }
    }
    axios.put(`${url}posts/${id}`, likesCount);
};


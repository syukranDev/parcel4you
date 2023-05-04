import connectMongo from "../../../database/conn";
import Users from '../../../model/Schema'
import { hash } from "bcryptjs";

export default async function handler(req, res) {
    connectMongo().catch(e => res.json({ error: 'Connection database failed!'}))

    if(req.method === 'POST'){
        if(!req.body){
            return res.status(400).json({ error: 'Dont have form data!'})
        }

        const { username, email, password } = req.body

        // check if user exist
        const isUserExist = await Users.findOne({ email })
        if(isUserExist) return res.status(422).json({ message: 'User already exists!'})

        // continue if user not exist and hash user's password
        Users.create({ 
            username,
            email, 
            password : await hash(password, 12)
        }).then(data => {
                res.status(201).json({status: true, user: data})
        }).catch(err => {
           return res.status(404).json({ err })
        })
            


    } else {
        res.status(500).json({ message: 'HTTP method invalid, only POST method allowed!'})
    }

}
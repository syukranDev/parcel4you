import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import { compare } from "bcrypt"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req){
        connectMongo().catch(err => { error: 'Connection Failed!' })

        //check user exist
        const isUserExist = await Users.findOne({ email: credentials.email})

        if(!isUserExist){
          throw new Error('No user found with this email, please sign up')
        }

        //compare password
        const checkPassword = await compare(credentials.password, isUserExist.password)
        if(!checkPassword || isUserExist.email !== credentials.email) {
          throw new Error('Username or Password is not exist!')
        }

        return isUserExist


      }
    })

  ],
  secret: 'lRuNh136PQOIwd3obMTEXoi9G9W9B0zoQD0XAoLEDks='
}

export default NextAuth(authOptions)

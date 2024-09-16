import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { User } from "./lib/database/models/user.model";
import { connectDB } from "./lib/database/models/mongoose";
import { generateUsername } from "./lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user, account }) {
            await connectDB()
            try {
                if (account.provider === 'google') {
                    const existedUser = await User.findOne({ email: user.email });
                    console.log({ existedUser });


                    if (existedUser) {
                        const existedUserObj = await existedUser.toObject();

                        // assign the user id, name, username, avatar from data the database user data.
                        user.id = existedUserObj?._id
                        user.name = existedUserObj?.name;
                        user.username = existedUserObj?.username;
                        user.image = existedUserObj?.avatar;

                        return user
                    } else {
                        // create a new user
                        const newUser = await User.create({
                            email: user.email,
                            name: user.name,
                            username: generateUsername(user.name),
                            avatar: user.image,
                            emailVerified: true
                        })
                        console.log({ newUser })
                        if (!newUser) {
                            throw new Error("User creation error")
                        }
                        const newUserObj = await newUser.toObject()
                        // assign new user data to the user object
                        user.id = newUserObj?._id
                        user.name = newUserObj?.name;
                        user.username = newUserObj?.username;
                        user.image = newUserObj?.avatar;

                        return user
                    }

                }
            } catch (error) {
                console.error("Sign in error in signin callback:", error)
                throw new Error(error?.message || "Sign in error in signin callback");

            }

            return user
        },
        jwt({ token, user }) {
            if (user) {
                // console.log("user from jwt callback:", user)
                token.id = user?.id;
                token.name = user?.name;
                token.username = user?.username;
                token.image = user?.image;
            }
            return token
        },
        session({ session, token }) {
            // console.log("token from session callback", token);
            if (session) {
                session.user.id = token?.id;
                session.user.name = token?.name;
                session.user.username = token?.username;
                session.user.image = token?.image;
            }
            return session
        },
    }
})
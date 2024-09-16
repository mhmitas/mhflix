import { model, models, Schema } from 'mongoose'

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        password: {
            type: String,
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        avatar: {
            type: String,
            default: "/default-avatar.png"
        },
        coverImage: {
            type: String
        },
        about: {
            type: String
        },
        watchHistory: [{
            type: Schema.Types.ObjectId,
            ref: "Video"
        }],
    },
    { timestamps: true }
)

export const User = models.User || model("User", userSchema)
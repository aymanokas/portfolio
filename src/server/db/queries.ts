import "server-only"
import { db } from "~/server/db"

export async function getMyAvatar(){
    const avatar = await db.query.images.findFirst()
    console.log('images', avatar)
    return avatar
}
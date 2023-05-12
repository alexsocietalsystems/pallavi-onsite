// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'


export default async ({ args }) => {
  const allMessages = await db.message.findMany();

  allMessages.forEach((message) => {
    console.log("SCHEDULING NOTIFICATIONS FOR: ", message)
  })
}

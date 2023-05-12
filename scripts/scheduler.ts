// To access your database
// Append api/* to import from api and web/* to import from web
import { db } from 'api/src/lib/db'


function shouldSendMessage(
  message,
  citation
) {
  var day_adjustment;
  if (message.timeUnit == "DAY") {
    day_adjustment = message.countBefore
  } else if (message.timeUnit == "WEEK") {
    day_adjustment = message.countBefore * 7;
  } else {
    throw new Error("Invalid time unit " + message.timeUnit + " must be DAY or WEEK")
  }
  const millisecond_adjustment = day_adjustment * 1000 * 60 * 60 * 24
  const sendTime = new Date(citation.docket_time - millisecond_adjustment)
  const currentTime = new Date()
  console.log(
    "CURRENT TIME:", currentTime, "\n",
    "TIME TO SEND:", sendTime, "\n",
    "DOCKET TIME", citation.docket_time
  );
  return (currentTime >= sendTime)
}

// TODO: Add the user ID once added to schema
function sendNotifications(idempotencyKey, content) {
  // TODO: format content once user ID is provided
  console.log("SENDING NOTIFICATIONS, KEY:", idempotencyKey, "CONTENT:", content)
}

export default async ({ args }) => {
  console.log("Sending needed notifications...")
  const allMessages = await db.message.findMany();

  for (const message of allMessages) {
    const allCitations = await db.citation.findMany();

    for (const citation of allCitations) {
      if (shouldSendMessage(message, citation)) {
        const idempotencyKey = (
          citation.citation_number + "-" + citation.docket_time +
          "-" + message.id
        )
        // TODO: Format message template into content once user is available
        sendNotifications(idempotencyKey, message.messageTemplate)
      }
    }
  }
  console.log("...done")
}

import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        messageTemplate: 'String',
        timeUnit: 'String',
        countBefore: 6916344,
      },
    },
    two: {
      data: {
        messageTemplate: 'String',
        timeUnit: 'String',
        countBefore: 666552,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>

import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        phoneNumber: 'String',
        citation: {
          create: {
            citation_number: 'String',
            driver_name: 'String',
            docket_time: '2023-05-12T18:32:26.559Z',
            court: {
              create: { street_address: 'String', court_name: 'String' },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        phoneNumber: 'String',
        citation: {
          create: {
            citation_number: 'String',
            driver_name: 'String',
            docket_time: '2023-05-12T18:32:26.559Z',
            court: {
              create: { street_address: 'String', court_name: 'String' },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

import type { Prisma, Citation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CitationCreateArgs>({
  citation: {
    one: {
      data: {
        citation_number: 'String',
        driver_name: 'String',
        docket_time: '2023-05-12T16:29:28.476Z',
        court: { create: { street_address: 'String', court_name: 'String' } },
      },
    },
    two: {
      data: {
        citation_number: 'String',
        driver_name: 'String',
        docket_time: '2023-05-12T16:29:28.476Z',
        court: { create: { street_address: 'String', court_name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Citation, 'citation'>

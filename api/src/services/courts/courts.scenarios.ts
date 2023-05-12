import type { Prisma, Court } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourtCreateArgs>({
  court: {
    one: { data: { street_address: 'String', court_name: 'String' } },
    two: { data: { street_address: 'String', court_name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Court, 'court'>

import type { Court } from '@prisma/client'

import { courts, court, createCourt, updateCourt, deleteCourt } from './courts'
import type { StandardScenario } from './courts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('courts', () => {
  scenario('returns all courts', async (scenario: StandardScenario) => {
    const result = await courts()

    expect(result.length).toEqual(Object.keys(scenario.court).length)
  })

  scenario('returns a single court', async (scenario: StandardScenario) => {
    const result = await court({ id: scenario.court.one.id })

    expect(result).toEqual(scenario.court.one)
  })

  scenario('creates a court', async () => {
    const result = await createCourt({
      input: { street_address: 'String', court_name: 'String' },
    })

    expect(result.street_address).toEqual('String')
    expect(result.court_name).toEqual('String')
  })

  scenario('updates a court', async (scenario: StandardScenario) => {
    const original = (await court({ id: scenario.court.one.id })) as Court
    const result = await updateCourt({
      id: original.id,
      input: { street_address: 'String2' },
    })

    expect(result.street_address).toEqual('String2')
  })

  scenario('deletes a court', async (scenario: StandardScenario) => {
    const original = (await deleteCourt({ id: scenario.court.one.id })) as Court
    const result = await court({ id: original.id })

    expect(result).toEqual(null)
  })
})

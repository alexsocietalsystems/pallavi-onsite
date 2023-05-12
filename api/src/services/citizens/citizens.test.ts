import type { Citizen } from '@prisma/client'

import {
  citizens,
  citizen,
  createCitizen,
  updateCitizen,
  deleteCitizen,
} from './citizens'
import type { StandardScenario } from './citizens.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('citizens', () => {
  scenario('returns all citizens', async (scenario: StandardScenario) => {
    const result = await citizens()

    expect(result.length).toEqual(Object.keys(scenario.citizen).length)
  })

  scenario('returns a single citizen', async (scenario: StandardScenario) => {
    const result = await citizen({ id: scenario.citizen.one.id })

    expect(result).toEqual(scenario.citizen.one)
  })

  scenario('creates a citizen', async (scenario: StandardScenario) => {
    const result = await createCitizen({
      input: {
        name: 'String',
        email: 'String',
        phoneNumber: 'String',
        citation_id: scenario.citizen.two.citation_id,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.phoneNumber).toEqual('String')
    expect(result.citation_id).toEqual(scenario.citizen.two.citation_id)
  })

  scenario('updates a citizen', async (scenario: StandardScenario) => {
    const original = (await citizen({ id: scenario.citizen.one.id })) as Citizen
    const result = await updateCitizen({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a citizen', async (scenario: StandardScenario) => {
    const original = (await deleteCitizen({
      id: scenario.citizen.one.id,
    })) as Citizen
    const result = await citizen({ id: original.id })

    expect(result).toEqual(null)
  })
})

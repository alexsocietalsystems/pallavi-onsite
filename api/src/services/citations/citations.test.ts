import type { Citation } from '@prisma/client'

import {
  citations,
  citation,
  createCitation,
  updateCitation,
  deleteCitation,
} from './citations'
import type { StandardScenario } from './citations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('citations', () => {
  scenario('returns all citations', async (scenario: StandardScenario) => {
    const result = await citations()

    expect(result.length).toEqual(Object.keys(scenario.citation).length)
  })

  scenario('returns a single citation', async (scenario: StandardScenario) => {
    const result = await citation({ id: scenario.citation.one.id })

    expect(result).toEqual(scenario.citation.one)
  })

  scenario('creates a citation', async (scenario: StandardScenario) => {
    const result = await createCitation({
      input: {
        court_id: scenario.citation.two.court_id,
        citation_number: 'String',
        driver_name: 'String',
        docket_time: '2023-05-12T16:29:28.462Z',
      },
    })

    expect(result.court_id).toEqual(scenario.citation.two.court_id)
    expect(result.citation_number).toEqual('String')
    expect(result.driver_name).toEqual('String')
    expect(result.docket_time).toEqual(new Date('2023-05-12T16:29:28.462Z'))
  })

  scenario('updates a citation', async (scenario: StandardScenario) => {
    const original = (await citation({
      id: scenario.citation.one.id,
    })) as Citation
    const result = await updateCitation({
      id: original.id,
      input: { citation_number: 'String2' },
    })

    expect(result.citation_number).toEqual('String2')
  })

  scenario('deletes a citation', async (scenario: StandardScenario) => {
    const original = (await deleteCitation({
      id: scenario.citation.one.id,
    })) as Citation
    const result = await citation({ id: original.id })

    expect(result).toEqual(null)
  })
})

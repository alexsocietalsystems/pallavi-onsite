import type {
  QueryResolvers,
  MutationResolvers,
  CitationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const citations: QueryResolvers['citations'] = () => {
  return db.citation.findMany()
}

export const citation: QueryResolvers['citation'] = ({ id }) => {
  return db.citation.findUnique({
    where: { id },
  })
}

export const createCitation: MutationResolvers['createCitation'] = ({
  input,
}) => {
  return db.citation.create({
    data: input,
  })
}

export const updateCitation: MutationResolvers['updateCitation'] = ({
  id,
  input,
}) => {
  return db.citation.update({
    data: input,
    where: { id },
  })
}

export const deleteCitation: MutationResolvers['deleteCitation'] = ({ id }) => {
  return db.citation.delete({
    where: { id },
  })
}

export const Citation: CitationRelationResolvers = {
  court: (_obj, { root }) => {
    return db.citation.findUnique({ where: { id: root?.id } }).court()
  },
}

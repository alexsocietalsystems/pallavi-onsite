import type {
  QueryResolvers,
  MutationResolvers,
  CourtRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const courts: QueryResolvers['courts'] = () => {
  return db.court.findMany()
}

export const court: QueryResolvers['court'] = ({ id }) => {
  return db.court.findUnique({
    where: { id },
  })
}

export const createCourt: MutationResolvers['createCourt'] = ({ input }) => {
  return db.court.create({
    data: input,
  })
}

export const updateCourt: MutationResolvers['updateCourt'] = ({
  id,
  input,
}) => {
  return db.court.update({
    data: input,
    where: { id },
  })
}

export const deleteCourt: MutationResolvers['deleteCourt'] = ({ id }) => {
  return db.court.delete({
    where: { id },
  })
}

export const Court: CourtRelationResolvers = {
  citations: (_obj, { root }) => {
    return db.court.findUnique({ where: { id: root?.id } }).citations()
  },
}

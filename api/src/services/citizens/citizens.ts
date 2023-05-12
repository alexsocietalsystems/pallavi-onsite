import type {
  QueryResolvers,
  MutationResolvers,
  CitizenRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const citizens: QueryResolvers['citizens'] = () => {
  return db.citizen.findMany()
}

export const citizen: QueryResolvers['citizen'] = ({ id }) => {
  return db.citizen.findUnique({
    where: { id },
  })
}

export const createCitizen: MutationResolvers['createCitizen'] = ({
  input,
}) => {
  return db.citizen.create({
    data: input,
  })
}

export const updateCitizen: MutationResolvers['updateCitizen'] = ({
  id,
  input,
}) => {
  return db.citizen.update({
    data: input,
    where: { id },
  })
}

export const deleteCitizen: MutationResolvers['deleteCitizen'] = ({ id }) => {
  return db.citizen.delete({
    where: { id },
  })
}

export const Citizen: CitizenRelationResolvers = {
  citation: (_obj, { root }) => {
    return db.citizen.findUnique({ where: { id: root?.id } }).citation()
  },
}

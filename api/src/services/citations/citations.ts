import type {
  QueryResolvers,
  MutationResolvers,
  CitationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const citations: QueryResolvers['citations'] = () => {
  console.log("Getting called 123")
  return db.citation.findMany()
}

export const citation: QueryResolvers['citation'] = ({ id }) => {
  return db.citation.findUnique({
    where: { id },
  })
}

export const getCitationByNumberAndDriverName: QueryResolvers['getCitationByNumberAndDriverName'] =  async ({ citationNumber, driverName }) => {
  console.log("Getting called")
  const citation_num = await db.citation.findFirst({
    where: { 
      citation_number: citationNumber },
  })
  console.log(citation_num)
  if(citation_num == null){
    return { citation: null, citationExists: false }
  }
  const citation =  db.citation.findFirst({
    where: {
      citation_number: citationNumber,
      driver_name: driverName,
    },
    include: {
      court: true,
    },
  });
  return { citation: citation, citationExists: true }
};

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

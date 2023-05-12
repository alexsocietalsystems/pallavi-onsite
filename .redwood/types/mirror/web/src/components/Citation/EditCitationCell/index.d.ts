// This file was generated by RedwoodJS
import * as Cell from './EditCitationCell'
import type { CellProps } from '@redwoodjs/web'
import type { EditCitationById, EditCitationByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './EditCitationCell'

type CellInputs = CellProps<SuccessType, EditCitationById, typeof Cell, EditCitationByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>

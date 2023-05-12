// This file was generated by RedwoodJS
import * as Cell from './EditCourtCell'
import type { CellProps } from '@redwoodjs/web'
import type { EditCourtById, EditCourtByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './EditCourtCell'

type CellInputs = CellProps<SuccessType, EditCourtById, typeof Cell, EditCourtByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
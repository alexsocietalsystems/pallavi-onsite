// This file was generated by RedwoodJS
import * as Cell from './EditMessageCell'
import type { CellProps } from '@redwoodjs/web'
import type { EditMessageById, EditMessageByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './EditMessageCell'

type CellInputs = CellProps<SuccessType, EditMessageById, typeof Cell, EditMessageByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
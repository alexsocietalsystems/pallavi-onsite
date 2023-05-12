// This file was generated by RedwoodJS
import * as Cell from './MessagesCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindMessages, FindMessagesVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './MessagesCell'

type CellInputs = CellProps<SuccessType, FindMessages, typeof Cell, FindMessagesVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
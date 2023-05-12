// This file was generated by RedwoodJS
import * as Cell from './CourtsCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindCourts, FindCourtsVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './CourtsCell'

type CellInputs = CellProps<SuccessType, FindCourts, typeof Cell, FindCourtsVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
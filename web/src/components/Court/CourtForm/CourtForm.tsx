import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCourtById, UpdateCourtInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCourt = NonNullable<EditCourtById['court']>

interface CourtFormProps {
  court?: EditCourtById['court']
  onSave: (data: UpdateCourtInput, id?: FormCourt['id']) => void
  error: RWGqlError
  loading: boolean
}

const CourtForm = (props: CourtFormProps) => {
  const onSubmit = (data: FormCourt) => {
    props.onSave(data, props?.court?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCourt> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="street_address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street address
        </Label>

        <TextField
          name="street_address"
          defaultValue={props.court?.street_address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="street_address" className="rw-field-error" />

        <Label
          name="court_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Court name
        </Label>

        <TextField
          name="court_name"
          defaultValue={props.court?.court_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="court_name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CourtForm

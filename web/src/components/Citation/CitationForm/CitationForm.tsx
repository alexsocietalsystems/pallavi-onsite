import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCitationById, UpdateCitationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormCitation = NonNullable<EditCitationById['citation']>

interface CitationFormProps {
  citation?: EditCitationById['citation']
  onSave: (data: UpdateCitationInput, id?: FormCitation['id']) => void
  error: RWGqlError
  loading: boolean
}

const CitationForm = (props: CitationFormProps) => {
  const onSubmit = (data: FormCitation) => {
    props.onSave(data, props?.citation?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCitation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="court_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Court id
        </Label>

        <NumberField
          name="court_id"
          defaultValue={props.citation?.court_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="court_id" className="rw-field-error" />

        <Label
          name="citation_number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Citation number
        </Label>

        <TextField
          name="citation_number"
          defaultValue={props.citation?.citation_number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="citation_number" className="rw-field-error" />

        <Label
          name="driver_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Driver name
        </Label>

        <TextField
          name="driver_name"
          defaultValue={props.citation?.driver_name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="driver_name" className="rw-field-error" />

        <Label
          name="docket_time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Docket time
        </Label>

        <DatetimeLocalField
          name="docket_time"
          defaultValue={formatDatetime(props.citation?.docket_time)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="docket_time" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CitationForm

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditCitizenById, UpdateCitizenInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormCitizen = NonNullable<EditCitizenById['citizen']>

interface CitizenFormProps {
  citizen?: EditCitizenById['citizen']
  onSave: (data: UpdateCitizenInput, id?: FormCitizen['id']) => void
  error: RWGqlError
  loading: boolean
}

const CitizenForm = (props: CitizenFormProps) => {
  const onSubmit = (data: FormCitizen) => {
    props.onSave(data, props?.citizen?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCitizen> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.citizen?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.citizen?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phoneNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>

        <TextField
          name="phoneNumber"
          defaultValue={props.citizen?.phoneNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="phoneNumber" className="rw-field-error" />

        <Label
          name="citation_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Citation id
        </Label>

        <NumberField
          name="citation_id"
          defaultValue={props.citizen?.citation_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="citation_id" className="rw-field-error" />

        <Label
          name="notifications"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notifications
        </Label>

        <CheckboxField
          name="notifications"
          defaultChecked={props.citizen?.notifications}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notifications" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CitizenForm

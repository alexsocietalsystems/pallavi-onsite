import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditMessageById, UpdateMessageInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormMessage = NonNullable<EditMessageById['message']>

interface MessageFormProps {
  message?: EditMessageById['message']
  onSave: (data: UpdateMessageInput, id?: FormMessage['id']) => void
  error: RWGqlError
  loading: boolean
}

const MessageForm = (props: MessageFormProps) => {
  const onSubmit = (data: FormMessage) => {
    props.onSave(data, props?.message?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMessage> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="messageTemplate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message template
        </Label>

        <TextField
          name="messageTemplate"
          defaultValue={props.message?.messageTemplate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="messageTemplate" className="rw-field-error" />

        <Label
          name="timeUnit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time unit
        </Label>

        <TextField
          name="timeUnit"
          defaultValue={props.message?.timeUnit}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timeUnit" className="rw-field-error" />

        <Label
          name="countBefore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Count before
        </Label>

        <NumberField
          name="countBefore"
          defaultValue={props.message?.countBefore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="countBefore" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm

/**
 * Annotations are ways of marking up text in the block content editor.
 *
 * Read more: https://www.sanity.io/docs/customization#f924645007e1
 */
import { EnvelopeIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const linkEmailAnnotation = defineType({
  title: "Email link",
  name: "annotationLinkEmail",
  type: "object",
  icon: EnvelopeIcon,
  components: {
    annotation: (props) => (
      <span>
        <EnvelopeIcon
          style={{
            marginLeft: "0.05em",
            marginRight: "0.1em",
            width: "0.75em",
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    // Email
    defineField({
      title: "Email",
      name: "email",
      type: "email",
    }),
  ],
  preview: {
    select: {
      email: "email",
    },
  },
})

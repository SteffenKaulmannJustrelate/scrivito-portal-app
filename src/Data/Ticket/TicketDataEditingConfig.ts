import { provideEditingConfig } from 'scrivito'
import { Ticket } from './TicketDataClass'

provideEditingConfig(Ticket, {
  title: 'Ticket',
  attributes: {
    created_at: {
      title: "Created at",
      description: "Created at"
    },
    created_by: {
      title: "Created by",
      description: "Created by"
    },
    modified_by: {
      title: "Modified by",
      description: "Modified by"
    },
    pisa_id: {
      title: "Pisa id",
      description: "Pisa id"
    },
    number: {
      title: "Number",
      description: "Number"
    },
    description: {
      title: "Description",
      description: "Description"
    },
    title: {
      title: "Title",
      description: "Title"
    },
    pinboardEntries: {
      title: "Pinboard entries",
      description: "Pinboard entries"
    },
    flt: {
      title: "Filter",
      description: "Filter"
    },
  },
})

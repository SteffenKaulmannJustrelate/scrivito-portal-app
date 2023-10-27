import { provideEditingConfig } from 'scrivito'
import { Pinboard } from './PinboardDataClass'

provideEditingConfig(Pinboard, {
  title: 'Pinboard',
  attributes: {
    msg: {
      title: "Message",
      description: "A message"
    },
  },
})

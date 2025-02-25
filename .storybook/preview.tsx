import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import React from 'react'
import Provider from '../src/utils/chakraSystem'

const preview: Preview<ReactRenderer> = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' }
    }),
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    )
  ]
}

export default preview

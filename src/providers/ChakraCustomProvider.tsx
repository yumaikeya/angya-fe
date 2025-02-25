import { ReactNode } from 'react'
import {
  createSystem,
  ChakraProvider,
  defaultConfig,
  defineConfig,
  defineGlobalStyles
} from '@chakra-ui/react'
import { ColorModeProvider } from '@/components/ChakraUI/color-mode'
import { ThemeProvider } from 'next-themes'

const globalStyles = defineGlobalStyles({
  // styles global
  body: {
    background: '#2C2C2C'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none'
    },
    _focus: {
      boxShadow: 'none'
    }
  }
})

const customConfig = defineConfig({
  strictTokens: true,
  theme: {
    tokens: {
      colors: {
        primary: {
          mainDark: { value: '#0076d6' }, // custom color
          mainLight: { value: '#1f9aff' },
          textDark: { value: '#FAFAFA' },
          textLight: { value: '#2C2C2C' },
          outlineDark: { value: '#b5b5b5' },
          outlineLight: { value: '#878787' },
          outlineTextDark: { value: '#dedcdc' },
          outlineTextLight: { value: '#000000' }
        },
        _blue: {
          100: { value: '#2D9BF0' },
          200: { value: '#f9fbfc' },
          300: { value: '#F1F6F7' },
          400: { value: '#c9e7f4' },
          700: { value: '#493fa4' },
          900: { value: '#372f8a' }
        },
        teal: {
          300: { value: '#0C8CE9' }
        },
        progress: {
          teal: {
            500: { value: '#4FD1C5' }
          }
        },
        modal: {
          bgOverlay: { value: 'rgba(0, 0, 0, 0.18)' }
        },
        danger: {
          50: { value: '#E94D431a' },
          500: { value: '#E94D43' }
        },
        light: {
          text: { value: '#111111' },
          bg: { value: '#FFFFFF' },
          modal: { value: '#FAFAFA' },
          bgInput: { value: 'gray.200' },
          bgCard: { value: '#F9FBFC' },
          border: { value: '#b5b5b5' },
          bgHeader: { value: 'gray.100' }
        },
        dark: {
          text: { value: '#FAFAFA' },
          bg: { value: '#2C2C2C' },
          modal: { value: '#383838' },
          bgInput: { value: 'gray.700' },
          bgCard: { value: '#383838' },
          border: { value: '#878787' },
          bgHeader: { value: 'gray.900' }
        }
      },
      fonts: {
        body: { value: `'Noto Sans JP', sans-serif` },
        heading: { value: `'Noto Sans JP', sans-serif` }
      },
      shadows: {
        blurShadow: { value: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)' }
      }
    }
  },
  globalCss: globalStyles
})
const system = createSystem(defaultConfig, customConfig)

export const ChakraCustomProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute={'class'} disableTransitionOnChange defaultTheme={'system'}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}

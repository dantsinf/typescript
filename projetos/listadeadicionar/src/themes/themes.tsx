import React from 'react'
import { ThemeProvider } from 'styled-components';

const themes: React.FC = ({ children }) => {

  const fontSizes: any = [14,20,96]
  fontSizes.body = fontSizes[0]
  fontSizes.bodyExtraLarge = fontSizes[1]
  fontSizes.displayLarge = fontSizes[2]

  const primary = '#2567B4';
  const secondary = '#F9B531';

  const theme = {
    fontSizes,
    colors: {
      primary,
      secondary,
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default themes;

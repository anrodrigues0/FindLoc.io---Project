import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '../theme/theme.style';

export const Theme:React.FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
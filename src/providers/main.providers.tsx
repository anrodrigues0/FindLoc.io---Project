import React from 'react';
import { Theme } from './theme.provider';
import { UtilsAppProvider } from './utils-app.providers';

export const MainProviders: React.FC = ({ children }) => (
    <UtilsAppProvider>
        <Theme>
            {children}
        </Theme>
    </UtilsAppProvider>
)
import React from 'react';
import { ScrollView } from 'react-native';


export const ScrollViewAppComponent: React.FC = ({children}) => (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
        {children}
    </ScrollView>
)

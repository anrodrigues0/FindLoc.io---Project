import React,{createContext,useContext} from "react";
import { assets as useAssets } from "../utils/assets";
import {CommonString} from '../utils/strings/strings.utils';
import {VSeparator,CenterBox} from '../utils/grid';
import * as ValidateInput  from '../helper/validate-input.helper'

const grid = {
    VSeparator,
    CenterBox
};


const helper = {
    ValidateInput
}

interface IUtilsApp {
    useAssets:typeof useAssets,
    CommonString: typeof CommonString
    grid: typeof grid, 
    helper: typeof helper
};



const UtilsApp = createContext({} as IUtilsApp)

export const UtilsAppProvider:React.FC = ({children}) => (
    <UtilsApp.Provider value={{CommonString,useAssets,grid,helper}}>
        {children}
    </UtilsApp.Provider>
)

export const useUtils = ():IUtilsApp => {
    const utilsApp = useContext(UtilsApp);
    return utilsApp
}
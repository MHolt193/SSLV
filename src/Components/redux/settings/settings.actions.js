import { SELECTED, UNSELECTED } from './settings.types'

export const setSelected = () =>{
    return {
        type: SELECTED,
    };
};

export const setUnselected = () =>{
    return {
        type: UNSELECTED,
    };
};
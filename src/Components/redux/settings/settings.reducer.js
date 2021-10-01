import { SELECTED, UNSELECTED } from './settings.types'

const INITIAL_STATE={
    selected: UNSELECTED
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED:
            return{
                ...state, selected: SELECTED,
            }
        case UNSELECTED:
            return {
                ...state, selected: UNSELECTED
            }   
        default: return state
    }

};

export default reducer
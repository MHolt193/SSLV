import { combineReducers } from 'redux' 
import settingsReducer from './settings/settings.reducer'

const rootReducer = combineReducers({
    settings: settingsReducer,
})

export default rootReducer;
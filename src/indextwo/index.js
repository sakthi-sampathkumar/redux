import { combineReducers } from 'redux';
import CounterReducer from './Reduxtwo/Counter';

const allreducer = combineReducers({
    Count:CounterReducer
});

export default allreducer;
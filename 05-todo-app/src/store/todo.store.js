import {Todo} from '../todos/models/todo.model'

const Filters = {
    All:'all',
    Completed:'completed',
    Pending:'pending'
}

const state = {
    todos:[
        new Todo('pieddra del alma'),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('initStore');
}


export default {
    state,
    initStore,
    Filters
}

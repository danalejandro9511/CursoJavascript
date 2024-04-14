import './style.css'
import { App } from './src/todos/app.js'
import todosStore from './src/store/todo.store.js';

todosStore.initStore();

App('#app');
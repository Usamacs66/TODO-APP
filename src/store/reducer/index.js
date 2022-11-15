import { combineReducers } from "@reduxjs/toolkit";
import { Todo } from "./Todo";
import { TodoList } from "./TodoList";
import visibilityFilter from "./visibilityFilters";
export const rootReducer = combineReducers({TodoList,Todo,visibilityFilter});
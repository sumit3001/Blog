import { combineReducers } from 'redux'
import auth from './auth'
import category from './category'
import blog from './blog'

export default combineReducers({
  auth,
  category,
  blog
})
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { ADD_TODO, REMOVE_TODO, INIT_TODO } from './action-types'

const db = firebase.database()
const todosRef = db.ref('/todos')

export default () =>
  new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      [INIT_TODO]: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('todos', todosRef, { wait: true })
      }),
      [ADD_TODO]: firebaseAction((context, text) => {
        todosRef.push(text)
      }),
      [REMOVE_TODO]: firebaseAction((context, key) => {
        todosRef.child(key).remove()
      })
    },
    getters: {
      getTodos: state => state.todos
    }
  })

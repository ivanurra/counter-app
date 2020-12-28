import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'

const divRoot = document.querySelector('#app')

ReactDOM.render(<CounterApp value={10} />, divRoot) 
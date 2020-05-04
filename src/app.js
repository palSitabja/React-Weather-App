import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './router/AppRouter'
import store from './redux/store'
import 'normalize.css/normalize.css'
import './styles/styles.css';





// ReactDOM.render(
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>,
// document.getElementById('app')
// )
ReactDOM.render(<AppRouter/>, document.getElementById('app'))
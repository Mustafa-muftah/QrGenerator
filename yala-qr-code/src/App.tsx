import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import "./index.css"
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QrCodeForm } from './components/screens/qrForm/QrCodeForm'
import { History } from './components/screens/history/History'
import { Provider } from 'react-redux'
import { store } from './appState/Store';

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}> 
     <Router>
        <div>
          <nav >
            <ul className='flex justify-evenly my-4'>
              <li className='font-bold text-indigo-600 text-xl '>
                <Link className='' to='/home'>Home</Link>
              </li>
              <li className='font-bold text-indigo-600 text-xl '>
                <Link to='/history'>History</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/home'>
            <QrCodeForm/>
            </Route> 
            <Route path='/history'>
            <History/>
            </Route> 
            </Switch>
            </div>
            </Router> 
    </QueryClientProvider>
    </Provider>
  )
}




export default App

import React from 'react'
import LoadingBar from 'react-redux-loading-bar'
import Content from './Content'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import { Header } from '../components'
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/style.scss'

const App = () => {
  return (
    <div>
      <LoadingBar className='loading' />
      <Header />
      <SearchBar />
      <Content />
      <Pagination />
    </div>
  )
}
export default App

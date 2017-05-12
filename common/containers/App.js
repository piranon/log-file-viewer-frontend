import React from 'react'
import Content from './Content'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import { Header } from '../components'
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/style.scss'

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Content />
      <Pagination />
    </div>
  )
}
export default App

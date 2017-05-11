import React from 'react'
import Content from './Content'
import { Header, Pagination } from '../components'
import 'bootstrap/dist/css/bootstrap.css'
import '../theme/style.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Pagination />
    </div>
  )
}
export default App

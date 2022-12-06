import { useEffect, useReducer, useState } from 'react';
import { loadData_action } from './actions/dataActions';
import './App.scss';
import DataContext from './components/DataContext';
import NewData from './components/NewData';
import Table from './components/Table';
import TablePagesList from './components/TablePagesList';
import data_reducer from './reducers/dataReducer';
import pagesList_reducer from './reducers/pagesListReducer';


function App() {
  const [data, dispachData] = useReducer(data_reducer, null)

  const [pagesList, dispachPagesList] = useReducer(pagesList_reducer, [[]])  //default one empty page

  const [isCheck, setIsCheck] = useState(false)

  const [page, setPage] = useState(1)

  useEffect(() => {
    dispachData(loadData_action())

  }, [])

  return (
    <div className='body'>

      <div className='title-place'>
        <h1>Employees Table</h1>
      </div>

      <DataContext.Provider value={{
        data,
        dispachData,
        isCheck,
        setIsCheck,
        pagesList,
        page,
        setPage,
        dispachPagesList
      }}>
        <NewData />
        <Table />
        <TablePagesList />
      </DataContext.Provider>

    </div>
  )
}

export default App;

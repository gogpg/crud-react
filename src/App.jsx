import { useEffect, useReducer, useState } from 'react';
import { loadData_action } from './actions/dataActions';
import './App.scss';
import DataContext from './components/DataContext';
import NewData from './components/NewData';
import Table from './components/Table';
import TablePagesList from './components/TablePagesList';
import data_reducer from './reducers/dataReducer';


function App() {
  const [data, dispachData] = useReducer(data_reducer, null)

  const [isCheck, setIsCheck] = useState(false)
  let pagesList = [[]];
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
        setPage
      }}>
        <NewData />
        <Table />
        <TablePagesList />
      </DataContext.Provider>

    </div>
  )
}

export default App;

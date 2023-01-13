import { useEffect, useState } from 'react';
import HeadInput from './components/HeadInput';
import {  TableType } from './types/type';
import Pagination from './components/Pagination';
import './App.css'

function App() {
  const [table, setTable] = useState<TableType[]>([])
  const [Error, setError] = useState<any>()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await fetch('https://reqres.in/api/products')
          .then((res) => res.json())
          .then((data) => setTable(data.data))
        // console.log(table);
      } catch (err) {
        // console.log(err);
        setError(err)
      }

    }
    fetchProducts()
  }, [])

  return (
    <div className='App'>
      {
        table.length > 0 ?
          <div className='MainComp'>
            <HeadInput />
            <Pagination Table={table} />
          </div>
          :
          <div className='Error'>
            {Error}
          </div>
      }
    </div>
  );
}

export default App;

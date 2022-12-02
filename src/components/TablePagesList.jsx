import { useContext } from "react"
import DataContext from "./DataContext"

export default function TablePagesList() {                            ////puslapiavimas
    const { pagesList, page, setPage } = useContext(DataContext)

    return (
        <nav style={{ display: 'flex', gap: '10px' }}>

            {page > 1 ? <button onClick={() => setPage(p => p - 1)}>{'<'}</button> : null}

            <ul>

                {page === 2 && <li onClick={() => setPage(1)}>1</li>}

                {page === 3 &&
                    <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li onClick={() => setPage(2)}>2</li>
                    </>}

                {page > 3 &&
                    <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li>...</li>
                        <li onClick={() => setPage(p => p - 1)}>{page - 1}</li>
                    </>}

                <li>{page}</li>

                {page < pagesList.length - 2 &&
                    <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li>...</li>
                        <li onClick={() => setPage(pagesList.length)}>{pagesList.length}</li>
                    </>}

                {page === pagesList.length - 2 &&
                    <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li onClick={() => setPage(p => p + 2)}>{page + 2}</li>
                    </>}

                {page === pagesList.length - 1 &&
                    <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>}

            </ul>

            {page < pagesList.length && <button onClick={() => setPage(p => p + 1)}>{'>'}</button>}

        </nav>
    )
}













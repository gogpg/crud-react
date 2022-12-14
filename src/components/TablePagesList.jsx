import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react"
import { createPagesInLIst_action } from "../actions/pagesListActions";
import DataContext from "./DataContext"

export default function TablePagesList() {                            ////puslapiavimas
    const { pagesList, page, setPage, data, dispachPagesList } = useContext(DataContext);
    const [pageSize, setPageSize] = useState('');

    useEffect(() => {
        const pageSizeLocal = localStorage.getItem('pageSizeLocal') || 3;
        setPageSize(pageSizeLocal)
    }, [])

    useEffect(() => {
        const pageSizeLocal = localStorage.getItem('pageSizeLocal');
        if (pageSize && pageSize !== pageSizeLocal) {
            localStorage.setItem('pageSizeLocal', pageSize);
            dispachPagesList(createPagesInLIst_action(data));
        }
    }, [pageSize, data, dispachPagesList])

    return (
        <div>

            <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>

                <option value="">Page size</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>

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

        </div>
    )
}













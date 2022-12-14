import { useContext, useEffect, useState } from "react";
import { deleteAllSelectedEmployees_action, sortEmployees_action } from "../actions/dataActions";
import { checkAll_action } from "../actions/pagesListActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, isCheck, setIsCheck, dispachPagesList, page, pagesList } = useContext(DataContext)

    const [disabled, setDisabled] = useState(false)

    const check = e => {
        const c = e.target.checked;
        setIsCheck(c);
    }

    const deleteAllChecked = () => {
        let idList = [];
        for (const employee of pagesList[page - 1]) {
            employee.check && (idList = [...idList, employee.id])
        }
        idList.length && dispachData(deleteAllSelectedEmployees_action(idList))
    }

    useEffect(() => {
        if (pagesList[page - 1].some(e => !e.check) || !pagesList[page - 1].length) {  //jei bent vienas nepazymetas
            setIsCheck(false)             ///virsutinis checkbox turi buti nepazymetas
        } else if (pagesList[page - 1]?.every(e => e.check)) {
            setIsCheck(true)
        }

        if (pagesList[page - 1].length) {  //disable main checkbox, kai nera irasu lenteleje
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [isCheck, page, pagesList, setIsCheck])

    const [lastSort, setLastSort] = useState({ type: '', order: 0 })

    const sort = (type) => {

        if (lastSort.type !== type || !lastSort.order) {   //jeigu neissortinta
            dispachData(sortEmployees_action(type, 1))
            setLastSort({ type, order: 1 })
        } else if (lastSort.type === type && lastSort.order === 1) {
            dispachData(sortEmployees_action(type, -1))
            setLastSort({ type, order: -1 })
        } else if (lastSort.type === type && lastSort.order === -1) {
            dispachData(sortEmployees_action('id', 1))
            setLastSort({ type: '', order: 0 })
        }
    }

    return (
        <thead>
            <tr>
                <th><input type="checkbox" onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)); }} checked={isCheck} disabled={disabled}></input></th>
                <th onClick={() => sort('name')} >Name</th>
                <th onClick={() => sort('age')}>Age</th>
                <th onClick={() => sort('city')}>City</th>
                <th><button onClick={deleteAllChecked}>Delete all selected</button></th>
            </tr>
        </thead>

    )
}

export default TableHead;

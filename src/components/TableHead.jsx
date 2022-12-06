import { useContext, useEffect, useState } from "react";
import { deleteAllSelectedEmployees_action } from "../actions/dataActions";
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

    return (
        <thead>
            <tr>
                <th><input type="checkbox" onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)); }} checked={isCheck} disabled={disabled}></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th><button onClick={deleteAllChecked}>Delete all selected</button></th>
            </tr>
        </thead>

    )
}

export default TableHead;

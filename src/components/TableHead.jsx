import { useContext, useEffect } from "react";
import { deleteAllSelectedEmployees_action } from "../actions/dataActions";
import { checkAll_action } from "../actions/pagesListActions";
import DataContext from "./DataContext";
function TableHead() {

    const { dispachData, isCheck, setIsCheck, dispachPagesList, page, pagesList } = useContext(DataContext)

    const check = e => {
        const c = e.target.checked;
        setIsCheck(c);
    }

    useEffect(() => {
        if (pagesList[page - 1].some(e => !e.check)) {  //jei bent vienas nepazymetas
            setIsCheck(false)             ///virsutinis checkbox turi buti nepazymetas
        } else if (pagesList[page - 1].every(e => e.check)) {
            setIsCheck(true)
        }

    }, [isCheck, page, pagesList, setIsCheck])

    return (
        <thead>
            <tr>
                <th><input type="checkbox" onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)); }} checked={isCheck} ></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th><button onClick={() => dispachData(deleteAllSelectedEmployees_action())}>Delete all selected</button></th>
            </tr>
        </thead>

    )
}

export default TableHead;

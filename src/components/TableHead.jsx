import { useContext, useEffect } from "react";
import { checkAll_action, deleteAllSelectedEmployees_action } from "../actions/dataActions";
import DataContext from "./DataContext";
function TableHead() {

    const { dispachData, data, isCheck, setIsCheck } = useContext(DataContext)

    const check = e => {
        const c = e.target.checked;
        setIsCheck(c);
    }

    useEffect(() => {
        if (data) {
            const checkData = [...data].filter(e => !e.deleted);
            if (data.length && !checkData.some(e => !e.check)) {
                setIsCheck(true);
            } else {
                setIsCheck(false)
            }
        }

    }, [data, setIsCheck])

    return (
        <thead>
            <tr>
                <th><input type="checkbox" onChange={e => { check(e); dispachData(checkAll_action(e.target.checked)); }} checked={isCheck}></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th><button onClick={() => dispachData(deleteAllSelectedEmployees_action())}>Delete all selected</button></th>
            </tr>
        </thead>

    )
}

export default TableHead;
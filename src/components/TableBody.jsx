import { useContext, useEffect, useState } from "react";
import { deleteEmployee_action, saveEdit_action } from "../actions/dataActions";
import { cancelEdit_action, checkEmplyee_action, createPagesInLIst_action, focusEmployee_action } from "../actions/pagesListActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck, pagesList, page, dispachPagesList } = useContext(DataContext)   // is data context

    useEffect(() => {
        dispachPagesList(createPagesInLIst_action(data))
    }, [data, dispachPagesList])

    const check = (id, e) => {
        const c = e.target.checked;
        dispachPagesList(checkEmplyee_action(id, page, c))

        if (!c) {
            setIsCheck(c)
        }
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        if (pagesList[page - 1]?.some(e => e.focus)) {
            const focusEmployee = [...pagesList[page - 1]].filter(e => e.focus)[0];
            setName(focusEmployee.name);
            setAge(focusEmployee.age);
            setCity(focusEmployee.city);
        }

    }, [page, pagesList])

    function focusEmployee(e) {

        return (
            <tr key={e.id}>
                <td><input type='checkbox' onChange={event => check(e.id, event)} checked={e.check} /></td>
                <td><input style={{ color: '343049', width: '100px' }} type='text' onKeyUp={event => event.key === 'Enter' && dispachData(saveEdit_action(e.id, { name, age, city }))} value={name} onChange={event => setName(event.target.value)} /></td>
                <td><input style={{ color: '343049', width: '100px' }} type='number' onKeyUp={event => event.key === 'Enter' && dispachData(saveEdit_action(e.id, { name, age, city }))} value={age} onChange={event => setAge(event.target.value)} /></td>
                <td>
                    <select value={city} onChange={event => setCity(event.target.value)}>
                        <option value="">Choose city</option>
                        <option value="Vilnius">Vilnius</option>
                        <option value="Kaunas">Kaunas</option>
                        <option value="Klaipeda">Klaipeda</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => dispachPagesList(cancelEdit_action(page))}>Cancel</button>
                    <button onClick={() => dispachData(saveEdit_action(e.id, { name, age, city }))}>Save</button>
                </td>

            </tr>
        )
    };

    function blurEmployee(e) {
        return (
            <tr key={e.id}>
                <td><input type='checkbox' onChange={event => check(e.id, event)} checked={e.check} /></td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>
                    <button onClick={() => dispachData(deleteEmployee_action(e.id))}>Delete</button>
                    <button onClick={() => dispachPagesList(focusEmployee_action(e.id, page))}>Edit</button>
                </td>

            </tr>
        )
    }

    return (
        <tbody>
            {pagesList[page - 1]?.map(e => e.focus ? focusEmployee(e) : blurEmployee(e))}
        </tbody>
    )
}
export default TableBody;
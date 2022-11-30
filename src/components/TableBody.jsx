import { useContext, useEffect, useState } from "react";
import { cancelEdit_action, checkEmplyee_action, deleteEmployee_action, focusEmployee_action, saveEdit_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck } = useContext(DataContext)


    const check = (id, e) => {
        const c = e.target.checked;
        dispachData(checkEmplyee_action(id, c))

        if (!c) {
            setIsCheck(c)
        }
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        if (data?.some(e => e.focus)) {
            const focusEmployee = [...data].filter(e => e.focus)[0];
            setName(focusEmployee.name);
            setAge(focusEmployee.age);
            setCity(focusEmployee.city);
        }

    }, [data])

    function focusEmployee(e) {

        return (
            <tr key={e.id}>
                <td><input type='checkbox' onChange={event => check(e.id, event)} checked={e.check} /></td>
                <td><input style={{ color: '343049', width: '100px' }} type='text' value={name} onChange={event => setName(event.target.value)} /></td>
                <td><input style={{ color: '343049', width: '100px' }} type='number' value={age} onChange={event => setAge(event.target.value)} /></td>
                <td>
                    <select value={city} onChange={event => setCity(event.target.value)}>
                        <option value="">Choose city</option>
                        <option value="Vilnius">Vilnius</option>
                        <option value="Kaunas">Kaunas</option>
                        <option value="Klaipeda">Klaipeda</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => dispachData(cancelEdit_action())}>Cancel</button>
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
                    <button onClick={() => dispachData(focusEmployee_action(e.id))}>Edit</button>
                </td>

            </tr>
        )
    }

    //////////////////////// pusplapiavimas/////////////
    ///nustatome, kiek rodoma irasu puslapyje
    let notDeletedData = [];

    if (data) {
        notDeletedData = [...data].filter(e => !e.deleted)  //visi kurie neistrinti
    }

    let newData = [[]];

    while (notDeletedData.length > 0) {
        if (newData[newData.length - 1].length < 3) {
            newData[newData.length - 1].push(notDeletedData.shift());    ///shift pasiima pirma elementa ir ji pasalina is pries tai buvusio masyvo
        } else {
            newData.push([notDeletedData.shift()]);
        }

    }

    return (
        <tbody>
            {newData[0].map(e => e.focus ? focusEmployee(e) : blurEmployee(e))}
        </tbody>
    )
}
export default TableBody;
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table() {
    return (
        <div className="table-place">
            <table>
                <TableHead />
                <TableBody />
            </table>
        </div>
    )
}

export default Table;
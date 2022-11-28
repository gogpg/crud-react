export default function updateData(data) {
    localStorage.setItem('data', JSON.stringify(data)); //update data to local storage
}
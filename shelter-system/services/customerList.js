export async function customerList() {

    const response = await fetch('http://localhost:8080/api/customerList');
    return await response.json();

}
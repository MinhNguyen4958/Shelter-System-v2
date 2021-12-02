export async function getAllCustomers() {

    const response = await fetch('/api/customerList');
    return await response.json();
}
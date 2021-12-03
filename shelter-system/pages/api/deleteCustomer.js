export default async function deleteCustomer(req, res) {
    const response = await fetch(`http://server:8080/deleteCustomers`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
    })
    if (response.status == 200) {
        res.send(response);
    }
}
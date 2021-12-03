export default async function getCustomer(req, res) {
    const response = await fetch(`http://server:8080/customerInfo`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
    })
    if (response.status == 200) {
        res.send(response);
    }
}
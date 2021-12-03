export default async function checkoutCustomer(req, res) {
    const response = await fetch(`http://server:8080/checkoutCustomer`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
    })
    if (response.status == 200) {
        res.send(response);
    }
}
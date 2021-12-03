export default async function newCustomer(req, res) {
    const response = await fetch(`http://server:8080/addCustomer`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
      })
    if (response.status == 200) {
      res.send(response);
    }
}
export default async function newStaff(req, res) {
    const response = await fetch(`http://server:8080/addStaff`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
    })
    if (response.status == 200) {
        res.send(response);
    }
}
export async function newCustomer(req, res) {
    console.log("plsssssss");
    const response = await fetch(`http://server:8080/addCustomer`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req)
      })
    if (response.status == 200) {
      console.log("made it here??????");
      res.send(response);
    }
}
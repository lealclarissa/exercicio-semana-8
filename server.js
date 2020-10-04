const app = require("./src/app")
const port = 8080

app.listen(port, function () {
    console.log(`Executando em http://localhost:${port}`)
})
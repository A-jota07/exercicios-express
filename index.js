const express = require('express')
const app = express()


app.use((req, res) => {
    res.json({
        name: 'ipad 64Gb',
        price: 1959.99,
        discount: 0.15
    })
})


app.listen(3000, () => {
    console.log('Backend executando...')
})
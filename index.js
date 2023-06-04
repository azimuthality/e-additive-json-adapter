const express = require('express')
const app = express()
const port = 3000

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.text({defaultCharset: 'utf-8'}));

app.post("/", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    // console.log('body: ', request.body);
    const obj_ = JSON.parse(request.body);
    const obj = obj_[0];
    console.log(obj);

    if(!obj?.name) {
      response.send("На данную маркировку нет добавки");
    }

    const result = `Маркировка: ${obj.code} \n` +
        `Наименование: ${obj.name} \n` +
        `<b>Опасность: ${obj.risk}</b> \n` +
        `Описание: ${obj.description}`;

    console.log(result);
    response.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
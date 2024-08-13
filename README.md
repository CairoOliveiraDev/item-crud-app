# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Install json-server (https://github.com/typicode/json-server):

```
npm install -g json-server
```

Crie `db.json` com alguma data no modelo abaixo.
A `json-server` é uma biblioteca que permite que você crie uma API REST fake com zero codificação em poucos minutos. É uma ferramenta poderosa para prototipagem rápida e pode ser usada para mockar uma API backend.

1. Instale o `json-server` globalmente via npm:

npm install -g json-server

2. Crie um arquivo `db.json` na raiz do seu projeto. Este arquivo conterá os dados iniciais da sua fake API. Por exemplo:

{

"items": [

{ "id": 1, "title": "Exemplo de Item 1", "description": "Descrição do Item 1", "imageUrl": "linkParaImagem" }

]

}

3. Inicie o `json-server`:

json-server --watch db.json

Após iniciar o `json-server`, você terá uma API REST rodando localmente no endereço `http://localhost:3000/`. Você pode acessar `/items` para obter, adicionar, atualizar ou deletar

Now if you go to [http://localhost:3000/itens/1](http://localhost:3000/itens/1), you'll get

```json
{  
    "id":1,
    "nome":"Item 1"
}
```



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



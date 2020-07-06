
# COMO RODAR 

## SEQUENCIA EXECUTADA E BIBLIOTECAS INSTALADAS

### criar o arquivo package.json
```
npm init
```

### instalar o react e o next https://nextjs.org/docs/getting-started
``` 
npm install next react react-dom
```

### Abra arquivo package.json e adicione o seguinte script. 
```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

### Rodar o project
``` 
npm run dev
```

Abrir o projeto endereço padrão
[http://localhost:3000]

Instalar o Bootstrap
```
npm install --save bootstrap
```

Instalar react strap
```
npm install --save reactstrap
```

Instalar a biblioteca para inserir o CSS diretamento no HTML [https://github.com/zeit/next-plugins/tree/master/packages/next-css]
```
npm install --save @zeit/next-css
```

Instalar ícones
```
npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

Realizar conexão com a API
### npm install --save axios
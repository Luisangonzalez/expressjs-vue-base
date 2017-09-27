# phone-catalog-app backend

#### nodejs + expressjs
#### Docker:

* Build
```bash
$ make
```

* Run dist
```bash
$ make start
```

* To develope in server side (nodemon & watch with babel ES Transpiler) --> localhost:5000
```bash
$ make dev
```

* Run test in server side
```bash
$ make test
```

* Enter in container
```bash
$ make up
```

##### Local

*Requirements:*
 * Node 6.X
 * apt-transport-https
 * yarn (Optional but recommended)

*Commands:*

* Build
```bash
$ yarn   
```
*or*
```bash
$ npm install   
```

* Run dist
```bash
$ yarn start:dev   
```
*or*
```bash
$ npm start:dev   
```

* To develope in server side (nodemon & watch with babel ES Transpiler) --> localhost:5000
```bash
$ yarn run dev  
```
*or*
```bash
$ npm run dev   
```

* Run test in server side
```bash
$ yarn run test  
```
*or*
```bash
$ npm run test   
```

The root folder is public, `scss` with:
  * [Postcss](http://postcss.org/) with [auroprefix](https://github.com/postcss/autoprefixer)

**TEST IN BACKEND:**

*Run*

```
yarn test || npm test || make test
```

* [Mocha task runner](https://mochajs.org/)
* [Chai Aseert](http://chaijs.com/)
* [Supertest](https://github.com/visionmedia/supertest)
* [Mock http request with Nock](https://github.com/node-nock/nock)
* [Instanbul coverage](https://istanbul.js.org/)

Directory: `phone-catalog-app\test`

###### Why mocha, chai, supertest and nock?

* Is the stack that uses expressjs
  * [Example](https://github.com/expressjs/express/tree/master/test)
* Simple
* Is the most used   

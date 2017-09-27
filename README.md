# expressjs-vue-base


### Build with:

  * **[Vue](https://vuejs.org/)**
  * **[Express](http://expressjs.com/)**
  * **[Docker](https://www.docker.com/)**


#### Run on Docker:

Necessary [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/), it is tested and developed in Ubuntu 16.04.

* Run fronted and backend --> http://localhost:5000
```bash
$ make start
```

* Dev fronted (http://localhost:8080) and backend (http://localhost:5000) with watch
```bash
$ make dev
```

* Install_front
```bash
$ make install_front
```

* Dev front
```bash
$ make dev_front
```

* Build front
```bash
$ make build_front
```

* Install back
```bash
$ make install_back
```

* Build back
```bash
$ make build_back
```

* Dev back
```bash
$ make dev_back
```

* Up containter
```bash
$ make up
```

#### Run on local:

Use yarn or npm.
If you used the previous commands (make) you should delete the generated folders or `make rm`.


##### Run fronted and backend --> http://localhost:5000

  1. Build front
  ```bash
  $ cd front
  $ yarn
  $ yarn run build
  ```
  2. Build back and run --> http://localhost:5000
  ```bash
  $ cd ../back
  $ yarn
  $ yarn run compile
  $ yarn run start:dev
  ```

##### Backend

  * Directory: phone-catalog-app/back
  * Install: `yarn`
  * Compile: `yarn run compile`
  * Dev in watch: `yarn run dev`
  * Run compile: `yarn run start:dev`
  * Test: `yarn run test`  


##### Fronted

* Directory: phone-catalog-app/front
* Install: `yarn`
* Build: `yarn run build`
* Dev in watch: `yarn run dev`
* e2e Test: `yarn run test:e2e`  
* Unit Test: `yarn run test`

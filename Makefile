.PHONY: start install_front dev_front build_front install_back dev_back build_back test_back dev up rm

# Important
PROJECT_NAME=expressjs-vue-base
DOCKER_COMPOSE_WEB=docker-compose -p ${PROJECT_NAME} -f environment/docker-compose.yml
DOCKER_COMPOSE_RUN_WEB=${DOCKER_COMPOSE_WEB} run web

default: start

start: rm build_back build_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run start:dev";

install_front:
	${DOCKER_COMPOSE_RUN_WEB}  /bin/bash -ci "cd ./front && rm -rf node_modules yarn.lock dist && yarn";

dev_front: build_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./front && yarn run dev";

build_front: install_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./front && yarn run build";

install_back:
	${DOCKER_COMPOSE_RUN_WEB}  /bin/bash -ci "cd ./back && rm -rf node_modules coverage dist yarn.lock .nyc_output && yarn";

dev_back: build_back
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run dev";

build_back: install_back
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run compile";

test_back: build_back
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run test";

dev: build_back build_front
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web  /bin/bash -ci "cd ./back && yarn run dev & sleep 5 && cd front && yarn run dev";

up:
	${DOCKER_COMPOSE_WEB} run --rm --service-ports web /bin/bash

rm:
	${DOCKER_COMPOSE_RUN_WEB}  /bin/bash -ci "cd ./back && rm -rf node_modules coverage dist yarn.lock .nyc_output && cd ../front &&  rm -rf node_modules yarn.lock dist";

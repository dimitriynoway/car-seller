FROM postgres:14
LABEL Name='car-seller-api-db'

RUN set -eux ; \
  apt-get update -qq --assume-yes --fix-missing ; \
  apt-get install -qq --assume-yes curl wget apt-utils apt-transport-https ; \
  rm -rf /var/lib/apt/lists/*

![OpenFaaS](https://img.shields.io/badge/openfaas-serverless-blue.svg)
[![XO
code
style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

An OpenFaaS Serverless function to check a webpage's status

```
$ git clone https://github.com/austinfrey/ping.git
$ cd ping
$ faas-cli build -f ./ping.yml
$ faas-cli push -f ./ping.yml
$ faas-cli deploy -f ./ping.yml
$ echo https://google.com | faas-cli invoke ping
200 OK
```

@app
remix-architect-app

@http
/*
  method any
  src build/server

@static
fingerprint external
folder build/static

@plugins
plugin-remix
  src plugin-remix.js

@aws
runtime nodejs18.x
region us-east-1
architecture arm64

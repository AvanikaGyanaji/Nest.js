#!/bin/bash

curl -X POST -i http://localhost:3000/profiles/ \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Varun",
        "email": "varun@anvi.co"
    }'
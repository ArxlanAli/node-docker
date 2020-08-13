#!/bin/bash

mkdir /var/local/installers

# if [ $(sudo docker images -f "dangling=true" -q) ]; then
#   echo "Found a Dangling images"
#    sudo docker rmi $(sudo docker images -f "dangling=true" -q)
# else
#   echo "not found any dangling image"
# fi


#!/bin/bash

if [ $# -ge 1 ]; then
	python3 ~/github/aws/auto/login.py 0 18 1
else 
	python3 ~/github/aws/auto/login.py 0 18 0
fi

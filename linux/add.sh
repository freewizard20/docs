#!/bin/bash

git add *
git add -u
git status
if [ $# -ge 1 ]; then
	git commit -m "$1"
else
	git commit -m "adding new code"
fi
git push origin master


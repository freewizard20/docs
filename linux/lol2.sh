#!/bin/bash

sudo snap install wine-platform-5-stable
snap install leagueoflegends --edge --devmode
snap refresh --candidate wine-platform-5-staging
snap refresh --candidate wine-platform-runtime

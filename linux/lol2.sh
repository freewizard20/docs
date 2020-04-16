#!/bin/bash

sudo snap install wine-platform-5-stable
sudo snap install leagueoflegends --edge --devmode
sudo snap refresh --candidate wine-platform-5-staging
sudo snap refresh --candidate wine-platform-runtime
sudo snap set system snapshots.automatic.retention=np

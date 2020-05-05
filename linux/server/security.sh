#!/bin/bash

adduser pi
adduser pi sudo
su - pi

sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y ufw
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo systemctl start ufw
sudo systemctl enable ufw

sudo apt-get install -y fail2ban
sudo systemctl start fail2ban
sudo systemctl enable fail2ban

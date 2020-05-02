#!/bin/bash

sudo apt install -y gnome-tweaks htop iftop ffmpeg curl tmux
sudo apt-get install -y powertop
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
sudo apt -y install net-tools
sudo apt -y install flatpak
sudo flatpak install https://flathub.org/repo/appstream/org.gimp.GIMP.flatpakref

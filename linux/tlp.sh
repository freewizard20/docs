#!/bin/bash

sudo add-apt-repository ppa:linrunner/tlp
sudo apt update
sudo apt install tlp tlp-rdw
sudo tlp start

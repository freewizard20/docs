#!/bin/bash

sudo apt install -y cpu-checker
kvm-ok
sudo apt-get install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
sudo adduser `id -un` libvirt
sudo adduser `id -un` kvm
virsh list --all

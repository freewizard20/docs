#!/bin/bash

VBoxManage setextradata "macos" VBoxInternal/CPUM/IsaExts/AVX 0
VBoxManage setextradata "macos" VBoxInternal/CPUM/IsaExts/AVX2 0

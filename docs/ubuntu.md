# living with ubuntu


## shortcode
- find process : `pidof chrome` `ps aus | grep -i chrome`
- log : `journalctl -e`
- kernel version : `uname -r`
- `ls -lt` : 시간순 정렬
- zip dir : `zip -r -q myzip . *`
- see disk usage : `df`
- list connected hard disk : `sudo lshw -class disk`, `lsblk`
- see list of mounted hardware : `findmnt`
- move all files and directories : `mv -v ./* ../ext/`
- copy directory : `cp -r ./api ../gcloud/`
- 환경변수 설정 : `export PYTHON="/home/user/Downloads/python"`
- open chrome : `google-chrome https://github.com`
- check permissions : `ls -l filename.txt`
- open default browser : `xdg-open https://google.com`
## tmux

- copy/paste : `ctrl + b then [` + `ctrl + space` to select lines + `Alt + w` to copy to clipboard + move to desired pane + `ctrl + b then ]`

## encrypt file

- ccencrypt <filename>
- ccdecrypt <filename>

## format disk to exfat

```
sudo fdisk -l
sudo wipefs -a /dev/sda
sudo fdisk /dev/sda
n > def > def > t > 7 > w
sudo mkfs.exfat -n mydiskname /dev/sda
```

## yt

```
npm install -g ytdl
sudo apt install -y ffmpeg
```
log > yt.sh

## battery saving
```
sudo add-apt-repository ppa:linrunner/tlp
sudo apt update
sudo apt install tlp tlp-rdw
sudo tlp start
```

## laptop-mode-tools
```
sudo add-apt-repository ppa:linrunner/tlp
sudo apt update
sudo apt install tlp tlp-rdw
sudo tlp start
sudo pkexec lmt-config-gui
```

## macos
- disable secure boot and allow third party drivers for virtualbox
- sudo apt install virtualbox virtualbox-dkms virtualbox-ext-pack virtualbox-guest-additions-iso virtualbox-guest-utils virtualbox-qt
- make macos vm
- disable floppy, 16gb mem, 10cpu, vmdk 100gb, insert iso
- network advanced > port fw > ssh/127.0.0.1/2222/10.0.2.15/22
- usb3.0
- ./setup.sh -v macos -r 1920x1080
- restart vb
- run vm, erase disk and repartition, do a installation with failure
- remove iso
- type exit in terminal
- boot manager - boot in file - second one - boot.efi
- do installation(30min)
- insert apfs efi boot image
- on terminal, `edit startup.nsh`
- type
```
echo -off
load fs1:\EFI\drivers\apfs.efi
load fs1:\EFI\drivers\AppleUiSupport.efi
load fs1:\EFI\drivers\ApfsDriverLoader.efi
map -r
fs2:
cd System\Library\CoreServices\
boot.efi
```
- ctrl q + y to exit
- exit, continue
- will not work
- boot then type exit > continue again(it boots here)
- it worked like this, but change in startup.nsh might be needed
- go through fs1 ~ 5: to find a machine key
- change `cd System\Library\CoreServices` to `cd AAABB-AAB-AA-1234\System\Library\CoreServices`
- restart > might work. not tried.

## laptop setup

- set up keyboard shortcuts
- set up right click
- download chrome, vscode, android studio
- disable alarm sound
- auto hide dock
- install node, git, vim, tmux, htop, ytdl, ffmpeg
- search sensors
- do xps setup
- language settings

## gpu

- check current gpu : lspci -vnnn | perl -lne 'print if /^\d+\:.+(\[\S+\:\S+\])/' | grep VGA

## cpu temp

- sudo apt update
- sudo apt install lm-sensors
- sudo sensors-detect
- sensors

## shell

- change shell `chsh`
- current shell `echo $SHELL`
- shells available `/etc/shells`

## tweaks

- `sudo apt install gnome-tweaks
- touch pad right click, dark theme`

## kvm for android studio

- check for availability : `kvm-ok`
- 18.10 higher : `sudo apt-get install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils`
- else : `sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils`
- add user groups
```
sudo adduser `id -un` libvirt
sudo adduser `id -un` kvm
```
- check result : `virsh list --all`

- add android studio : tools > create desktop entry

## powertop

- sudo apt-get install powertop
- run : `sudo powertop`
- calibrate : `powertop --calibrate`
- report : `powertop --html=powertop`
- `systemctl start powertop.service`
- `systemctl enable powertop.service`

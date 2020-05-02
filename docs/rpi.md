# raspberry pi

## adding ufw on boot

- `sudo vim /lib/systemd/system/ufw.service`
- add `After=netfilter-persistent.service` after Before at [Unit]
- reboot

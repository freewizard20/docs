# raspberry pi

## adding ufw on boot

- `sudo vim /lib/systemd/system/ufw.service`
- add `After=netfilter-persistent.service` after Before at [Unit]
- reboot

## vpn

- `curl -L https://install.pivpn.io | bash`
- do config(openvpn)
- pivpn add >> make cert
- do port forwarding
- add ufw on boot
- download openvpn client
```
sudo apt update
sudo apt install openvpn -y
```
- move cert to client
- change ip address port number to forwarded port
- `sudo openvpn --config client.ovpn`


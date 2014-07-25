#!/usr/bin/env bash

if [ -f "/var/vagrant_provision" ]; then
	exit 0
fi

echo "America/Sao_Paulo" > /etc/timezone
dpkg-reconfigure --frontend noninteractive tzdata

echo "###################"
echo "# UPDATING SYSTEM #"
echo "###################"

apt-get update
apt-get install -y git lighttpd

echo "########################"
echo "# CONFIGURING LIGHTTPD #"
echo "########################"

rm -rfv /var/www
ln -s /vagrant /var/www

touch /var/vagrant_provision

root@pruebaserver:~# cat setup_vps.sh 
#!/bin/bash
set -e

DB_NAME="plataforma_db"
DB_USER="user_db_plataforma"
DB_PASS="pass_db_plataforma"

echo "[1/7] Actualizando sistema..."
apt update && apt upgrade -y

echo "[2/7] Creando usuario deploy..."
if ! id "deploy" &>/dev/null; then
    adduser --disabled-password --gecos "" deploy
    usermod -aG sudo deploy
fi

echo "[3/7] Instalando dependencias base..."
apt install -y build-essential curl git ufw software-properties-common

echo "[4/7] Instalando Docker y Compose..."
curl -fsSL https://get.docker.com | sh
usermod -aG docker deploy
apt install -y docker-compose-plugin

echo "[5/7] Instalando MariaDB..."
apt install -y mariadb-server mariadb-client

echo "[6/7] Configurando MariaDB para acceso externo..."
sed -i "s/^bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mariadb.conf.d/50-server.cnf
systemctl restart mariadb

echo "[7/7] Creando base de datos y usuario..."
mysql -u root <<MYSQL_SCRIPT
CREATE DATABASE IF NOT EXISTS ${DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '${DB_USER}'@'%' IDENTIFIED BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'%';
FLUSH PRIVILEGES;
MYSQL_SCRIPT

echo "✅ Base de datos creada:"
echo "    DB_NAME=${DB_NAME}"
echo "    DB_USER=${DB_USER}"
echo "    DB_PASS=${DB_PASS}"
echo
echo "[Firewall] Configurando UFW..."
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw allow 3306
ufw --force enable

echo "🚀 Setup completado. Reinicia sesión con: su - deploy"


## Russian:

# Система регистрации для сервера GTA Connected на MySQL

## Установка

Следуйте этим шагам, чтобы настроить систему на своем сервере:

1. Создайте папку `server` в корневой директории вашего сервера.

2. Переместите файлы `auth.js` и `main.js` в папку `server`.

3. Отредактируйте файл `meta.xml` в корневой директории сервера, добавив следующие строки:

   ```xml
   <script src="server/auth.js" type="server" language="javascript" />
   <script src="server/main.js" type="server" language="javascript" />

4. Вам останется реализовать логику камеры в исходнике main.js и в исходнике auth.js логику spawn
##
Вкомплекте с скриптами я оставлю GTAC-Server-Win64-1.6.2 полностью готовый полноценный сервер для тестов системы

## Внимание 
Вам понадобится Denwer, скачать можете его с офицального сайта [Denwer](http://www.denwer.ru/)
##
Подключать строго инструкции которая указана ниже:
 ```javascript
    let db = module.mysql.connect("127.0.0.1", "root", "", "gtaconnected", 3306);
```
##
Полный разбор:
```Text
    Адрес - "127.0.0.1"
    Имя пользователя - "root"
    Пароль - ""
    Имя базыданных - "gtaconnected"
    Порт - 3306
```
##

Готовая таблица:
##
```sql
    -- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2024 at 05:08 PM
-- Server version: 5.5.25
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gtaconnected`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`) VALUES
(1, 'Jessie', '1234567');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```
##

## English:

# Server registration system GTA Connected on MySQL

## Setup

Follow these steps to set up the system on your server:

1. Create folder `server` in the root directory of your server.

2. Move the files `auth.js` and `main.js` in folder `server`.

3. Edit the file `meta.xml` in the server root directory by adding the following lines:

   ```xml
   <script src="server/auth.js" type="server" language="javascript" />
   <script src="server/main.js" type="server" language="javascript" />

4. All you have to do is implement the camera logic in the main.js source and the spawn logic in the auth.js source
##
Complete with scripts, I will leave GTAC-Server-Win64-1.6.2 a completely ready, full-fledged server for system tests

## Attention 
You will need Denwer, you can download it from the official website [Denwer](http://www.denwer.ru/)
##
Connect strictly to the instructions listed below:
 ```javascript
    let db = module.mysql.connect("127.0.0.1", "root", "", "gtaconnected", 3306);
```
##
Full analysis:
```Text
    Address - "127.0.0.1"
    Username - "root"
    Password - ""
    Database name - "gtaconnected"
    Port - 3306
```
##

Table:
##
```sql
    -- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2024 at 05:08 PM
-- Server version: 5.5.25
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gtaconnected`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`) VALUES
(1, 'Jessie', '1234567');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```
##

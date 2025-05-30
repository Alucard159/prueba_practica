-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para prueba_tecnica
CREATE DATABASE IF NOT EXISTS `prueba_tecnica` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `prueba_tecnica`;

-- Volcando estructura para tabla prueba_tecnica.data_todo
CREATE TABLE IF NOT EXISTS `data_todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `statusCode` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Volcando datos para la tabla prueba_tecnica.data_todo: ~7 rows (aproximadamente)
INSERT INTO `data_todo` (`id`, `title`, `descripcion`, `statusCode`, `createdAt`, `updatedAt`) VALUES
	(1, 'Tarea 1', 'Mi primera tarea', 2, '2025-05-30 10:35:23', '2025-05-30 10:35:23'),
	(2, 'Tarea 2', 'Mi segunda tarea', 1, '2025-05-30 10:35:37', '2025-05-30 10:35:37'),
	(3, 'Tarea 3', 'Mi tercera tarea', 2, '2025-05-30 10:35:56', '2025-05-30 10:35:56'),
	(4, 'Tarea 4', 'Mi cuarta tarea', 1, '2025-05-30 11:30:19', '2025-05-30 11:30:19'),
	(5, 'Tarea 5', 'Mi quinta tarea', 0, '2025-05-30 11:38:53', '2025-05-30 11:38:53'),
	(6, 'Tarea 6', 'Mi sexta tarea', 0, '2025-05-30 11:41:41', '2025-05-30 11:41:41'),
	(7, 'Tarea 7', 'Mi séptima tarea', 0, '2025-05-30 11:42:24', '2025-05-30 11:42:24');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectos
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `out_pre`
--

DROP TABLE IF EXISTS `out_pre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `out_pre` (
  `out_id` int DEFAULT NULL,
  `pre_id` int DEFAULT NULL,
  KEY `out_id` (`out_id`),
  KEY `pre_id` (`pre_id`),
  CONSTRAINT `out_pre_ibfk_1` FOREIGN KEY (`out_id`) REFERENCES `outfit` (`out_id`) ON DELETE CASCADE,
  CONSTRAINT `out_pre_ibfk_2` FOREIGN KEY (`pre_id`) REFERENCES `prenda` (`pre_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `out_pre`
--

LOCK TABLES `out_pre` WRITE;
/*!40000 ALTER TABLE `out_pre` DISABLE KEYS */;
INSERT INTO `out_pre` VALUES (1,3),(1,5),(1,6),(2,3),(2,9),(2,6),(2,5),(3,3),(3,4),(3,5),(4,11),(4,6),(4,5),(5,3),(5,5),(5,4),(5,9),(6,3),(6,10),(6,6),(6,5),(7,3),(7,4),(7,5),(7,10),(8,5),(8,6),(8,3);
/*!40000 ALTER TABLE `out_pre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outfit`
--

DROP TABLE IF EXISTS `outfit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outfit` (
  `out_id` int NOT NULL AUTO_INCREMENT,
  `nombre_outfit` varchar(35) DEFAULT NULL,
  `imagen_outfit` varchar(100) DEFAULT NULL,
  `t_ver` tinyint(1) DEFAULT NULL,
  `t_oto` tinyint(1) DEFAULT NULL,
  `t_inv` tinyint(1) DEFAULT NULL,
  `t_prim` tinyint(1) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`out_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outfit`
--

LOCK TABLES `outfit` WRITE;
/*!40000 ALTER TABLE `outfit` DISABLE KEYS */;
INSERT INTO `outfit` VALUES (1,'Verano','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865596/nedroiyppydw4gwpn6ia.jpg',1,1,0,1,'Lucas'),(2,'Outfit Martes','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865624/w57t1pix9arskzfm76t1.jpg',0,1,1,0,'Lucas'),(3,'Cine mañana','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865648/lzbtyvdvejfy3pd0iyi7.jpg',1,0,0,1,'Lucas'),(4,'Cena Sábado','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865676/yvxttngcckguwyh0oe4l.jpg',0,1,1,0,'Lucas'),(5,'Reunión Miércoles','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865716/agkoueeasvmlkcsa8dh6.jpg',0,1,1,1,'Lucas'),(6,'Clase Lunes','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865756/zhgiaskkaqhpv3zswlii.jpg',1,1,0,0,'Lucas'),(7,'Outfit Verano','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865858/ovundbz3tgx6kkbrlodk.png',1,1,0,0,'Lucas'),(8,'Comida Domingo','https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865980/jmxwmei3vzuph0jso0rn.jpg',0,0,1,1,'Lucas');
/*!40000 ALTER TABLE `outfit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prenda`
--

DROP TABLE IF EXISTS `prenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prenda` (
  `pre_id` int NOT NULL AUTO_INCREMENT,
  `nombre_prenda` varchar(35) DEFAULT NULL,
  `tipo` varchar(35) DEFAULT NULL,
  `donacion` tinyint(1) DEFAULT '0',
  `archivada` tinyint(1) DEFAULT '0',
  `imagen_prenda` varchar(200) DEFAULT NULL,
  `color` varchar(15) DEFAULT NULL,
  `marca` varchar(35) DEFAULT NULL,
  `t_ver` tinyint(1) DEFAULT NULL,
  `t_oto` tinyint(1) DEFAULT NULL,
  `t_inv` tinyint(1) DEFAULT NULL,
  `t_prim` tinyint(1) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pre_id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prenda`
--

LOCK TABLES `prenda` WRITE;
/*!40000 ALTER TABLE `prenda` DISABLE KEYS */;
INSERT INTO `prenda` VALUES (3,'Zapatillas','Zapatos',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682844795/s913kxcejohhqsh8irav.jpg','Blancas','Pull&Bear',1,1,1,1,'Lucas'),(4,'Camisa Negra','Camisa',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682844818/ingx36u59za2vk0rnz7k.jpg','Negra','Zara',0,1,1,1,'Lucas'),(5,'Vaqueros','Pantalón',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865112/mwojc2ysfx0kxkkjqkjf.jpg','Vaqueros','Zara',1,1,1,1,'Lucas'),(6,'Camiseta NASA','Camiseta',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865135/urceebeuemcbatyzzli9.jpg','Blanca','NASA',1,1,1,1,'Lucas'),(7,'Zapatillas Negras','Zapatos',0,1,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865201/b3f0czvjwg0ygxuxuzzo.jpg','Negras','Nike',1,1,1,1,'Lucas'),(8,'Jersey Azul','Chaqueta',0,1,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865376/u5kuytrzl3je70lipddd.jpg','Azul','Zara',0,1,1,1,'Lucas'),(9,'Jersey Punto Gris','Chaqueta',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865404/pvg6gcbl0pvhfpriqbr4.jpg','Gris','Springfield',0,1,1,1,'Lucas'),(10,'Sudadera nike','Chaqueta',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865428/anlo1uivujjochwzzp4k.jpg','Gris','Nike',0,1,1,0,'Lucas'),(11,'Sudadera','Chaqueta',0,0,'https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682865482/m4nlemxvatjvwfarr4qi.jpg','Azul','Nike',0,1,1,0,'Lucas');
/*!40000 ALTER TABLE `prenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `user_id` varchar(15) NOT NULL,
  `contrasena` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('Lucas','1234');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-30 16:47:24

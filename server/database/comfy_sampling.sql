CREATE DATABASE  IF NOT EXISTS `comfy_shop_sampling` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `comfy_shop_sampling`;
-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: comfy_shop_sampling
-- ------------------------------------------------------
-- Server version	5.7.32

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
-- Table structure for table `body_part`
--

DROP TABLE IF EXISTS `body_part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `body_part` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `body_part`
--

LOCK TABLES `body_part` WRITE;
/*!40000 ALTER TABLE `body_part` DISABLE KEYS */;
INSERT INTO `body_part` VALUES (1,'Cintura','Waist'),(2,'Abdomen','Belly'),(3,'Pecho','Chest'),(4,'Caderas','Hip'),(5,'Busto','Bust'),(6,'Cuello','Neck'),(7,'Muslo','Thigh'),(8,'Piernas','Legs'),(9,'Torso','Torso'),(10,'Brazos','Arms');
/*!40000 ALTER TABLE `body_part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `body_shape_type`
--

DROP TABLE IF EXISTS `body_shape_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `body_shape_type` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `body_shape_type`
--

LOCK TABLES `body_shape_type` WRITE;
/*!40000 ALTER TABLE `body_shape_type` DISABLE KEYS */;
INSERT INTO `body_shape_type` VALUES (1,'Regular','Average'),(2,'Redondo','Round'),(3,'Plano','Flat'),(4,'Angosto','Narrow'),(5,'Ancho','Wide');
/*!40000 ALTER TABLE `body_shape_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bra_size`
--

DROP TABLE IF EXISTS `bra_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bra_size` (
  `id` int(11) NOT NULL,
  `value` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bra_size`
--

LOCK TABLES `bra_size` WRITE;
/*!40000 ALTER TABLE `bra_size` DISABLE KEYS */;
INSERT INTO `bra_size` VALUES (1,'80'),(2,'85'),(3,'90'),(4,'95'),(5,'100'),(6,'105'),(7,'110'),(8,'115'),(9,'120'),(10,'125');
/*!40000 ALTER TABLE `bra_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(155) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'testBrand','testcontact_name',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand_collection`
--

DROP TABLE IF EXISTS `brand_collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand_collection` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `collection_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_season_brand1_idx` (`brand_id`),
  KEY `fk_brand_collection_collection1_idx` (`collection_id`),
  CONSTRAINT `fk_brand_collection_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_brand_collection_collection1` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_collection`
--

LOCK TABLES `brand_collection` WRITE;
/*!40000 ALTER TABLE `brand_collection` DISABLE KEYS */;
INSERT INTO `brand_collection` VALUES (1,1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `brand_collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Abrigos'),(2,'Bermudas'),(3,'Blazers'),(4,'Buzos'),(5,'Calzas'),(6,'Camisas'),(7,'Camperas'),(8,'Chalecos'),(9,'Chaquetas'),(10,'Chombas'),(11,'Jeans'),(12,'Joggings'),(13,'Monos'),(14,'Musculosas'),(15,'Pantalones'),(16,'Polleras'),(17,'Shorts'),(18,'Shorts de baño'),(19,'Sweaters'),(20,'Tops'),(21,'Trajes'),(22,'Vestidos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_size_meassurement`
--

DROP TABLE IF EXISTS `category_size_meassurement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_size_meassurement` (
  `id` int(11) NOT NULL,
  `meassurement` decimal(3,2) DEFAULT NULL,
  `size_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `meassurement_point_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_size_meassurements_category1_idx` (`category_id`),
  KEY `fk_category_size_meassurements_size1_idx` (`size_id`),
  KEY `fk_category_size_meassurements_sub_category1_idx` (`subcategory_id`),
  KEY `fk_category_size_meassurements_meassurement_point1_idx` (`meassurement_point_id`),
  CONSTRAINT `fk_category_size_meassurements_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_size_meassurements_meassurement_point1` FOREIGN KEY (`meassurement_point_id`) REFERENCES `meassurement_point` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_size_meassurements_size1` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_category_size_meassurements_sub_category1` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_size_meassurement`
--

LOCK TABLES `category_size_meassurement` WRITE;
/*!40000 ALTER TABLE `category_size_meassurement` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_size_meassurement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (1,'AW',2021,NULL,NULL);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Mujer'),(2,'Hombre'),(3,'Unisex'),(4,'No Binario');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender_category`
--

DROP TABLE IF EXISTS `gender_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender_category` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `gender_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gender_category_category1_idx` (`category_id`),
  KEY `fk_gender_category_gender1_idx` (`gender_id`),
  CONSTRAINT `fk_gender_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_gender_category_gender1` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender_category`
--

LOCK TABLES `gender_category` WRITE;
/*!40000 ALTER TABLE `gender_category` DISABLE KEYS */;
INSERT INTO `gender_category` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,2),(5,3,1),(6,3,2),(7,3,3),(8,4,1),(9,4,2),(10,4,3),(11,5,1),(12,5,2),(13,5,3),(14,6,1),(15,6,2),(16,6,3),(17,7,1),(18,7,2),(19,7,3),(20,8,1),(21,8,2),(22,8,3),(23,9,1),(24,9,2),(25,9,3),(26,10,1),(27,10,2),(28,10,3),(29,11,1),(30,11,2),(31,11,3),(32,12,1),(33,12,2),(34,12,3),(35,13,1),(36,14,1),(37,14,2),(38,14,3),(39,15,1),(40,15,2),(41,15,3),(42,16,1),(43,17,1),(44,17,2),(45,17,3),(46,18,2),(47,19,1),(48,19,2),(49,19,3),(50,20,1),(51,21,2),(52,22,1);
/*!40000 ALTER TABLE `gender_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meassurement_point`
--

DROP TABLE IF EXISTS `meassurement_point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meassurement_point` (
  `id` int(11) NOT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `body_part_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_meassurement_point_body_part` (`body_part_id`),
  CONSTRAINT `fk_meassurement_point_body_part` FOREIGN KEY (`body_part_id`) REFERENCES `body_part` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meassurement_point`
--

LOCK TABLES `meassurement_point` WRITE;
/*!40000 ALTER TABLE `meassurement_point` DISABLE KEYS */;
INSERT INTO `meassurement_point` VALUES (1,'Contorno de cuello',6),(2,'Ancho de sisa',3),(3,'Contorno de cintura',1),(4,'Largo de torso',9),(5,'Largo de manga',10),(6,'Contorno de brazo',10),(7,'Contorno de caderas',4),(8,'Contorno de muslo',7),(10,'Largo de pierna',8),(11,'Contorno de busto',5);
/*!40000 ALTER TABLE `meassurement_point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `id` int(11) NOT NULL,
  `value` varchar(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (1,'S','Mas suelto','Looser',NULL,NULL,NULL),(2,'A','Mas ajustado','Tighter',NULL,NULL,NULL),(3,'R','De mi talle','My size',NULL,NULL,NULL),(4,'L','Más largo','Longer',NULL,NULL,NULL),(5,'C','Más corto','Shorter',NULL,NULL,NULL);
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `sku` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  `brand_collection_id` int(11) NOT NULL,
  `gender_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category1_idx` (`category_id`),
  KEY `fk_product_sub_category1_idx` (`subcategory_id`),
  KEY `fk_product_shop1_idx` (`brand_id`),
  KEY `fk_product_season1_idx` (`brand_collection_id`),
  KEY `fk_product_gender_id1_idx` (`gender_id`),
  CONSTRAINT `fk_product_brand_collection1` FOREIGN KEY (`brand_collection_id`) REFERENCES `brand_collection` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_gender_id1` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_shop1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_sub_category1` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,123,'testProduct',NULL,1,NULL,1,1,1,NULL,NULL,NULL),(2,1234,'testProduct2',NULL,2,NULL,1,1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_size`
--

DROP TABLE IF EXISTS `product_size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_size` (
  `id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_size_size1_idx` (`size_id`),
  KEY `fk_product_size_product1_idx` (`product_id`),
  CONSTRAINT `fk_product_size_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_size_size1` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_size`
--

LOCK TABLES `product_size` WRITE;
/*!40000 ALTER TABLE `product_size` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `value` varchar(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_en` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,'MS','Muy suelto','Very loose'),(2,'PS','Un poco suelto','A bit loose'),(3,'P','Perfecto','Perfect'),(4,'PA','Un poco ajustado','A bit tight'),(5,'MA','Muy ajustado','Very tight');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contact_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(155) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES (1,'testShop','test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'testShop2','test2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_brand`
--

DROP TABLE IF EXISTS `shop_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_brand` (
  `id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shop_brand_shop1_idx` (`shop_id`),
  KEY `fk_shop_brand_brand1_idx` (`brand_id`),
  CONSTRAINT `fk_shop_brand_brand1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_brand_shop1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_brand`
--

LOCK TABLES `shop_brand` WRITE;
/*!40000 ALTER TABLE `shop_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_product`
--

DROP TABLE IF EXISTS `shop_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_product` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shop_product_product1_idx` (`product_id`),
  KEY `fk_shop_product_shop1_idx` (`shop_id`),
  CONSTRAINT `fk_shop_product_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shop_product_shop1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_product`
--

LOCK TABLES `shop_product` WRITE;
/*!40000 ALTER TABLE `shop_product` DISABLE KEYS */;
INSERT INTO `shop_product` VALUES (1,1,1);
/*!40000 ALTER TABLE `shop_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name_en` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `label` varchar(4) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'Extra Small','XS'),(2,'Small','S'),(3,'Medium','M'),(4,'Large','L'),(5,'Extra Large','XL'),(6,'Extra Extra Large','XXL');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sub_category_category1` (`category_id`),
  CONSTRAINT `fk_sub_category_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `survey`
--

DROP TABLE IF EXISTS `survey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `survey` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_surveys_user2_idx` (`user_id`),
  KEY `fk_surveys_shop2_idx` (`shop_id`),
  CONSTRAINT `fk_surveys_shop2` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_surveys_user2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
INSERT INTO `survey` VALUES (1,1,1,NULL,NULL,NULL),(2,2,1,NULL,NULL,NULL),(3,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender_id` int(11) NOT NULL,
  `height` int(3) DEFAULT NULL,
  `weight` int(3) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `bmi` int(3) DEFAULT NULL,
  `bra_size_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_gender1` (`gender_id`),
  KEY `fk_user_bra_size1_idx` (`bra_size_id`),
  CONSTRAINT `fk_user_bra_size1` FOREIGN KEY (`bra_size_id`) REFERENCES `bra_size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_gender1` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test@gmail.com',2,175,75,23,22,NULL,NULL,NULL,NULL),(2,'test2@mail.com',1,165,70,21,24,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_body_shape`
--

DROP TABLE IF EXISTS `user_body_shape`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_body_shape` (
  `id` int(11) NOT NULL,
  `body_shape_type_id` int(11) NOT NULL,
  `body_part_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_body_shape_body_part_id1_idx` (`body_part_id`),
  KEY `fk_user_body_shape_body_shape_type_id1_idx` (`body_shape_type_id`),
  KEY `fk_user_body_shape_user_id1_idx` (`user_id`),
  CONSTRAINT `fk_user_body_shape_body_part_id1` FOREIGN KEY (`body_part_id`) REFERENCES `body_part` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_body_shape_body_shape_type_id1` FOREIGN KEY (`body_shape_type_id`) REFERENCES `body_shape_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_body_shape_user_id1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_body_shape`
--

LOCK TABLES `user_body_shape` WRITE;
/*!40000 ALTER TABLE `user_body_shape` DISABLE KEYS */;
INSERT INTO `user_body_shape` VALUES (1,1,1,1,NULL,NULL,NULL),(2,2,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user_body_shape` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category_fit_preference`
--

DROP TABLE IF EXISTS `user_category_fit_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_category_fit_preference` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `preference_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_preference_user1` (`user_id`),
  KEY `fk_user_category_fit_preference_preference1_idx` (`preference_id`),
  KEY `fk_user_category_fit_preference_category1_idx` (`category_id`),
  CONSTRAINT `fk_user_category_fit_preference_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_category_fit_preference_preference1` FOREIGN KEY (`preference_id`) REFERENCES `preference` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_preference_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category_fit_preference`
--

LOCK TABLES `user_category_fit_preference` WRITE;
/*!40000 ALTER TABLE `user_category_fit_preference` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_category_fit_preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_feedback`
--

DROP TABLE IF EXISTS `user_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_feedback` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `body_part_id` int(11) NOT NULL,
  `rating_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_feedback_user_id_idx` (`user_id`),
  KEY `fk_user_feedback_body_part_id1_idx` (`body_part_id`),
  KEY `fk_user_feedback_rating_id1_idx` (`rating_id`),
  KEY `fk_user_feedback_product_id_idx` (`product_id`),
  KEY `fk_user_feedback_survey_id1_idx` (`survey_id`),
  CONSTRAINT `fk_user_feedback_body_part_id1` FOREIGN KEY (`body_part_id`) REFERENCES `body_part` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback_rating_id1` FOREIGN KEY (`rating_id`) REFERENCES `rating` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback_survey_id1` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_feedback_user_id1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_feedback`
--

LOCK TABLES `user_feedback` WRITE;
/*!40000 ALTER TABLE `user_feedback` DISABLE KEYS */;
INSERT INTO `user_feedback` VALUES (1,1,1,1,1,1,NULL,NULL,NULL),(2,1,2,2,1,1,NULL,NULL,NULL),(3,2,3,3,1,2,NULL,NULL,NULL),(4,2,4,2,2,3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user_feedback` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-24 21:11:17

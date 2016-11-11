CREATE DATABASE  IF NOT EXISTS `cs542_project1` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cs542_project1`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: localhost    Database: cs542_project1
-- ------------------------------------------------------
-- Server version	5.7.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity_tbl`
--

DROP TABLE IF EXISTS `activity_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity_tbl` (
  `activity_id` int(11) NOT NULL AUTO_INCREMENT,
  `activity` varchar(50) DEFAULT NULL,
  `activity_type` varchar(10) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_tbl`
--

LOCK TABLES `activity_tbl` WRITE;
/*!40000 ALTER TABLE `activity_tbl` DISABLE KEYS */;
INSERT INTO `activity_tbl` VALUES (1,'barbell cuol','biceps',NULL),(2,'incline dumbbell curl','biceps',NULL),(3,'standing biceps cable curl','biceps',NULL),(4,'barbell bench press','chest',NULL),(5,'flat-bench dumbbell press','chest',NULL),(6,'low-incline barbell bench press','chest',NULL),(7,'barbell squat','leg',NULL),(8,'walking dumbbell lunge','leg',NULL),(9,'smith machine squat','leg',NULL);
/*!40000 ALTER TABLE `activity_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `excerises_schedule`
--

DROP TABLE IF EXISTS `excerises_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `excerises_schedule` (
  `exerises_id` int(11) NOT NULL AUTO_INCREMENT,
  `schedule_id` int(11) NOT NULL,
  `exerises_from` time DEFAULT NULL,
  `exerises_to` time DEFAULT NULL,
  `activity_id` int(11) NOT NULL,
  `sets` int(11) DEFAULT NULL,
  PRIMARY KEY (`exerises_id`),
  KEY `schedule_id` (`schedule_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `excerises_schedule_ibfk_1` FOREIGN KEY (`schedule_id`) REFERENCES `schedule_tbl` (`schedule_id`),
  CONSTRAINT `excerises_schedule_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activity_tbl` (`activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excerises_schedule`
--

LOCK TABLES `excerises_schedule` WRITE;
/*!40000 ALTER TABLE `excerises_schedule` DISABLE KEYS */;
INSERT INTO `excerises_schedule` VALUES (1,21,'14:00:00','17:00:00',2,50),(2,22,'08:00:00','09:30:00',4,100),(3,23,'10:00:00','12:00:00',7,60),(4,24,'07:30:00','09:00:00',9,80),(5,25,'15:00:00','17:00:00',4,50),(6,26,'19:00:00','20:30:00',1,40),(7,27,'20:00:00','22:00:00',2,40),(8,28,'10:00:00','11:00:00',5,50),(9,29,'13:30:00','14:30:00',7,60),(10,30,'21:00:00','22:00:00',3,50),(11,31,'09:00:00','10:30:00',5,70),(12,32,'10:00:00','11:30:00',6,40),(13,33,'13:30:00','15:00:00',2,50),(14,34,'14:00:00','16:00:00',4,60),(15,35,'15:00:00','16:40:00',7,40),(16,36,'09:30:00','11:00:00',6,90),(17,37,'10:00:00','11:40:00',1,80),(18,38,'07:00:00','08:30:00',9,20),(19,39,'07:40:00','09:00:00',4,70),(20,40,'16:00:00','18:00:00',4,90),(21,41,'15:00:00','17:00:00',9,40),(22,42,'08:00:00',NULL,3,50);
/*!40000 ALTER TABLE `excerises_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_comments`
--

DROP TABLE IF EXISTS `food_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comments` varchar(1000) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `comments_date` date DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `food_comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tbl` (`user_id`),
  CONSTRAINT `food_comments_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food_tbl` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_comments`
--

LOCK TABLES `food_comments` WRITE;
/*!40000 ALTER TABLE `food_comments` DISABLE KEYS */;
INSERT INTO `food_comments` VALUES (1,'pretty good',5,1,'2016-03-28'),(2,'I don\'t like it',6,2,'2016-03-14'),(3,'tastes good',7,3,'2016-03-10'),(4,'terrible',8,4,'2016-03-06'),(5,'awful',9,5,'2016-03-05'),(6,'I like it',10,6,'2016-03-20'),(7,'it\'s delicious',11,7,'2016-03-08'),(8,'I don\'t want to have it anymore',12,8,'2016-03-18'),(9,'I like it',5,9,'2016-03-14'),(10,'calorie is perfect for me ',6,10,'2016-03-19'),(11,'calorie is too high',7,1,'2016-03-22'),(12,'I need some broccoli with it',8,2,'2016-03-21'),(13,'it\'s perfect for me',9,3,'2016-03-02'),(14,'it tasts sweety',10,4,'2016-03-14'),(15,'I like it',11,5,'2016-03-03'),(16,'I prefer noodle',12,6,'2016-03-02'),(17,'beef good',5,1,NULL),(18,'good!',5,4,NULL);
/*!40000 ALTER TABLE `food_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_tbl`
--

DROP TABLE IF EXISTS `food_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_tbl` (
  `food_id` int(11) NOT NULL AUTO_INCREMENT,
  `food_type` varchar(20) DEFAULT NULL,
  `food_calories` float DEFAULT NULL,
  `food_flavor` varchar(20) DEFAULT NULL,
  `food_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_tbl`
--

LOCK TABLES `food_tbl` WRITE;
/*!40000 ALTER TABLE `food_tbl` DISABLE KEYS */;
INSERT INTO `food_tbl` VALUES (1,'protein',250,NULL,'beef'),(2,'protein',239,NULL,'chicken'),(3,'protein',208,NULL,'salmon'),(4,'carb',88,NULL,'banana'),(5,'carb',371,NULL,'macaroni'),(6,'carb',130,NULL,'rice'),(7,'fat',242,NULL,'pork'),(8,'fat',540,NULL,'bacon'),(9,'carb',24,NULL,'broccoli'),(10,'protein',155,NULL,'egg');
/*!40000 ALTER TABLE `food_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate_food`
--

DROP TABLE IF EXISTS `rate_food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rate_food` (
  `rate_id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  PRIMARY KEY (`rate_id`),
  KEY `user_id` (`user_id`),
  KEY `food_id` (`food_id`),
  CONSTRAINT `rate_food_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tbl` (`user_id`),
  CONSTRAINT `rate_food_ibfk_2` FOREIGN KEY (`food_id`) REFERENCES `food_tbl` (`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate_food`
--

LOCK TABLES `rate_food` WRITE;
/*!40000 ALTER TABLE `rate_food` DISABLE KEYS */;
INSERT INTO `rate_food` VALUES (1,10,6,7),(2,10,6,8),(3,10,6,10),(4,4,6,9),(5,8,6,2),(6,8,7,6),(7,5,7,10),(8,6,7,3),(9,9,7,6),(10,10,5,7),(11,10,5,8),(12,10,5,10),(13,6,5,9),(14,10,5,2),(15,9,9,7),(16,6,9,6),(17,7,9,1),(18,4,9,5),(19,2,9,9),(20,8,10,2),(21,7,10,3),(22,7,10,9),(23,10,8,10),(24,2,8,1),(25,3,8,7),(26,6,8,4),(27,9,11,1),(28,5,11,4),(29,4,11,8),(30,8,11,9),(31,1,12,10),(32,3,12,9),(33,2,12,7),(34,6,12,2),(35,6,5,1);
/*!40000 ALTER TABLE `rate_food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate_video`
--

DROP TABLE IF EXISTS `rate_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rate_video` (
  `rate_id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`rate_id`),
  KEY `user_id` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `rate_video_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tbl` (`user_id`),
  CONSTRAINT `rate_video_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video_tbl` (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate_video`
--

LOCK TABLES `rate_video` WRITE;
/*!40000 ALTER TABLE `rate_video` DISABLE KEYS */;
INSERT INTO `rate_video` VALUES (24,8,5,1),(25,6,5,4),(26,9,5,9),(27,4,6,2),(28,9,6,5),(29,7,6,10),(30,3,7,3),(31,8,7,8),(32,9,7,11),(33,10,8,4),(34,7,8,7),(35,6,8,12),(36,9,9,8),(37,8,9,6),(38,4,9,9),(39,9,10,5),(40,7,10,3),(41,8,10,7),(42,5,11,11),(43,8,11,9),(44,9,11,2),(45,9,12,12),(46,7,12,9),(47,2,12,3);
/*!40000 ALTER TABLE `rate_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipies_schedule`
--

DROP TABLE IF EXISTS `recipies_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipies_schedule` (
  `recipies_schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `schedule_id` int(11) NOT NULL,
  `recipies_time` time DEFAULT NULL,
  `recipies_id` int(11) NOT NULL,
  PRIMARY KEY (`recipies_schedule_id`),
  KEY `schedule_id` (`schedule_id`),
  CONSTRAINT `recipies_schedule_ibfk_1` FOREIGN KEY (`schedule_id`) REFERENCES `schedule_tbl` (`schedule_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipies_schedule`
--

LOCK TABLES `recipies_schedule` WRITE;
/*!40000 ALTER TABLE `recipies_schedule` DISABLE KEYS */;
INSERT INTO `recipies_schedule` VALUES (1,21,'07:30:00',6),(2,22,'07:30:00',3),(3,23,'07:30:00',5),(4,24,'12:00:00',7),(5,25,'12:00:00',2),(6,26,'12:00:00',4),(7,27,'12:00:00',6),(8,28,'18:00:00',1),(9,29,'18:00:00',4),(10,30,'18:00:00',7),(11,31,'12:00:00',2),(12,32,'12:00:00',6),(13,33,'12:00:00',3),(14,34,'18:00:00',5),(15,35,'18:00:00',6),(16,36,'18:00:00',1),(17,37,'07:30:00',2),(18,38,'07:30:00',3),(19,39,'07:30:00',5),(20,40,'18:00:00',7),(21,41,'18:00:00',2),(22,42,'12:00:00',6);
/*!40000 ALTER TABLE `recipies_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipies_tbl`
--

DROP TABLE IF EXISTS `recipies_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipies_tbl` (
  `recipies_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `recipi_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`recipi_id`),
  KEY `food_id_idx` (`food_id`),
  CONSTRAINT `food_id` FOREIGN KEY (`food_id`) REFERENCES `food_tbl` (`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipies_tbl`
--

LOCK TABLES `recipies_tbl` WRITE;
/*!40000 ALTER TABLE `recipies_tbl` DISABLE KEYS */;
INSERT INTO `recipies_tbl` VALUES (1,2,85),(1,5,86),(1,10,87),(2,1,88),(2,4,89),(2,9,90),(3,3,91),(3,6,92),(3,7,93),(4,2,94),(4,8,95),(4,6,96),(5,1,97),(5,2,98),(5,8,99),(6,4,100),(6,5,101),(6,10,102),(7,6,103),(7,7,104),(7,8,105);
/*!40000 ALTER TABLE `recipies_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule_tbl`
--

DROP TABLE IF EXISTS `schedule_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule_tbl` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `schedule_date` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`schedule_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `schedule_tbl_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tbl` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule_tbl`
--

LOCK TABLES `schedule_tbl` WRITE;
/*!40000 ALTER TABLE `schedule_tbl` DISABLE KEYS */;
INSERT INTO `schedule_tbl` VALUES (21,'2016-03-06',5),(22,'2016-03-08',5),(23,'2016-03-09',5),(24,'2016-03-11',5),(25,'2016-03-07',6),(26,'2016-03-09',6),(27,'2016-03-11',6),(28,'2016-03-15',7),(29,'2016-03-17',7),(30,'2016-03-16',8),(31,'2016-03-18',8),(32,'2016-03-20',9),(33,'2016-03-19',10),(34,'2016-03-13',10),(35,'2016-03-16',10),(36,'2016-03-18',10),(37,'2016-03-21',10),(38,'2016-03-15',11),(39,'2016-03-17',11),(40,'2016-03-21',12),(41,'2016-03-23',12),(42,'2016-03-25',12);
/*!40000 ALTER TABLE `schedule_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tbl`
--

DROP TABLE IF EXISTS `user_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tbl` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_accountname` varchar(40) NOT NULL,
  `user_gender` varchar(10) DEFAULT NULL,
  `user_age` int(11) DEFAULT NULL,
  `user_pwd` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tbl`
--

LOCK TABLES `user_tbl` WRITE;
/*!40000 ALTER TABLE `user_tbl` DISABLE KEYS */;
INSERT INTO `user_tbl` VALUES (5,'jimmy','jimmy','male',22,'jimmy'),(6,'kevin','kevin','male',23,'kevin'),(7,'belle','belle','female',23,'belle'),(8,'trista','trista','female',21,'trista'),(9,'jim','jim','male',28,'jim'),(10,'ken','ken','male',26,'ken'),(11,'annie','annie','female',27,'annie'),(12,'doris','doris','female',23,'doris');
/*!40000 ALTER TABLE `user_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_comments`
--

DROP TABLE IF EXISTS `video_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comments` varchar(1000) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `comments_date` date DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `video_comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tbl` (`user_id`),
  CONSTRAINT `video_comments_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video_tbl` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_comments`
--

LOCK TABLES `video_comments` WRITE;
/*!40000 ALTER TABLE `video_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_tbl`
--

DROP TABLE IF EXISTS `video_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video_tbl` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_type` varchar(20) DEFAULT NULL,
  `video_url` varchar(100) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_tbl`
--

LOCK TABLES `video_tbl` WRITE;
/*!40000 ALTER TABLE `video_tbl` DISABLE KEYS */;
INSERT INTO `video_tbl` VALUES (1,'biceps','https://www.youtube.com/watch?v=NftbyLKI0So'),(2,'biceps','https://www.youtube.com/watch?v=G3RrJ6ATrX8'),(3,'biceps','https://www.youtube.com/watch?v=mO70v8F9VeQ'),(4,'chest','https://www.youtube.com/watch?v=zfUrHcRFfzU'),(5,'chest','https://www.youtube.com/watch?v=ZtlH0A5dlLg'),(6,'chest','https://www.youtube.com/watch?v=slkh01aKxvE'),(7,'chest','https://www.youtube.com/watch?v=xJffxd376Aw'),(8,'biceps','https://www.youtube.com/watch?v=tqCrNADRl6g'),(9,'leg','https://www.youtube.com/watch?v=Apm7CdnsZNo'),(10,'leg','https://www.youtube.com/watch?v=RqTIKshUWhM'),(11,'leg','https://www.youtube.com/watch?v=qYCYbT75bNs'),(12,'leg','https://www.youtube.com/watch?v=PWlmHeXF7ik');
/*!40000 ALTER TABLE `video_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-23 22:15:40

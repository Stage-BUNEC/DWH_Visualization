-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: datawrehouse_bunec
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `dim_arrondissement`
--

DROP TABLE IF EXISTS `dim_arrondissement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_arrondissement` (
  `code_departement` varchar(255) DEFAULT '0',
  `code_arrondissement` varchar(255) NOT NULL,
  `libelle_arrondissement` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `ordering` int NOT NULL,
  `code_region` varchar(255) DEFAULT '0',
  PRIMARY KEY (`code_arrondissement`),
  KEY `code_departement_idx` (`code_departement`),
  CONSTRAINT `code_departement` FOREIGN KEY (`code_departement`) REFERENCES `dim_departement` (`code_departement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_cec_principale`
--

DROP TABLE IF EXISTS `dim_cec_principale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_cec_principale` (
  `immatriculation` varchar(8) NOT NULL,
  `num_informatisation` varchar(4) DEFAULT NULL,
  `nomcec` varchar(256) NOT NULL,
  `typecec` varchar(255) NOT NULL,
  `code_arrondissement` varchar(6) DEFAULT NULL,
  `arrete` text,
  `rattachement` varchar(8) NOT NULL,
  `created_by` int NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_cec_secondaire`
--

DROP TABLE IF EXISTS `dim_cec_secondaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_cec_secondaire` (
  `immatriculation` varchar(8) NOT NULL,
  `num_informatisation` varchar(4) DEFAULT NULL,
  `nomcec` varchar(256) NOT NULL,
  `typecec` varchar(255) NOT NULL,
  `code_arrondissement` varchar(6) DEFAULT NULL,
  `arrete` text,
  `rattachement` varchar(8) NOT NULL,
  `created_by` int NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_dec_naissance`
--

DROP TABLE IF EXISTS `dim_dec_naissance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_dec_naissance` (
  `id_naiss` varchar(20) NOT NULL,
  `num_acte` varchar(20) DEFAULT NULL,
  `noms_enfant` varchar(255) DEFAULT NULL,
  `prenoms_enfant` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `date_naiss` date DEFAULT NULL,
  `lieu_naiss` varchar(255) DEFAULT NULL,
  `type_naiss` varchar(255) DEFAULT NULL,
  `date_dec_naiss` date DEFAULT NULL,
  `noms_mere` varchar(255) DEFAULT NULL,
  `date_mere` date DEFAULT NULL,
  `lieu_mere` varchar(255) DEFAULT NULL,
  `nationalite_mere` varchar(255) DEFAULT NULL,
  `domicile_mere` varchar(255) DEFAULT NULL,
  `ref_mere` varchar(255) DEFAULT NULL,
  `niveau_scol_mere` varchar(255) DEFAULT NULL,
  `profession_mere` varchar(255) DEFAULT NULL,
  `situation_matrimoniale_mere` varchar(100) DEFAULT NULL,
  `type_ref_mere` int DEFAULT NULL,
  `num_doc_ref_mere` text,
  `declarant` varchar(255) DEFAULT NULL,
  `qualite` varchar(255) DEFAULT NULL,
  `lieu_declaration` varchar(255) DEFAULT NULL,
  `type_ref_dec` int DEFAULT NULL,
  `noms_pere` varchar(255) DEFAULT NULL,
  `num_dec` varchar(255) DEFAULT NULL,
  `date_pere` date DEFAULT NULL,
  `domicile_pere` varchar(255) DEFAULT NULL,
  `ref_doc_pere` text,
  `ref_doc_mere` text,
  `type_ref_pere` varchar(100) DEFAULT NULL,
  `num_doc_ref_pere` text,
  `centre_etat` varchar(6) DEFAULT NULL,
  `lieu_pere` varchar(100) DEFAULT NULL,
  `profession_pere` varchar(255) DEFAULT NULL,
  `situation_matrimoniale_pere` varchar(100) DEFAULT NULL,
  `niveau_scol_pere` varchar(100) DEFAULT NULL,
  `nationalite_pere` varchar(100) DEFAULT NULL,
  `doc_paternite` text,
  `origine_dec` int DEFAULT '0',
  `ne_vers` text,
  `ne_vers_mere` text,
  `secretaire` varchar(255) DEFAULT NULL,
  `officier` varchar(255) DEFAULT NULL,
  `mentionMarg` varchar(255) DEFAULT NULL,
  `date_ajout` datetime NOT NULL,
  PRIMARY KEY (`id_naiss`,`date_ajout`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_departement`
--

DROP TABLE IF EXISTS `dim_departement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_departement` (
  `code_region` varchar(255) DEFAULT '0',
  `code_departement` varchar(255) NOT NULL,
  `libelle_departement` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  PRIMARY KEY (`code_departement`),
  KEY `code_region_idx` (`code_region`),
  CONSTRAINT `code_region` FOREIGN KEY (`code_region`) REFERENCES `dim_region` (`code_region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_mariages`
--

DROP TABLE IF EXISTS `dim_mariages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_mariages` (
  `id` int NOT NULL,
  `num_acte` varchar(255) NOT NULL,
  `num_dec` varchar(100) NOT NULL,
  `noms_epoux` varchar(255) NOT NULL,
  `date_naiss_epoux` date NOT NULL,
  `lieu_epoux` varchar(255) NOT NULL,
  `nationalite_epoux` varchar(255) NOT NULL,
  `profession_epoux` varchar(255) NOT NULL,
  `ref_doc_epoux` varchar(255) NOT NULL,
  `domicile_epoux` varchar(255) NOT NULL,
  `noms_pere_epoux` varchar(255) NOT NULL,
  `noms_mere_epoux` varchar(255) NOT NULL,
  `chef_famille_epoux` varchar(255) NOT NULL,
  `temoin_epoux` varchar(255) NOT NULL,
  `noms_epouse` varchar(255) NOT NULL,
  `date_naiss_epouse` date NOT NULL,
  `lieu_epouse` varchar(255) NOT NULL,
  `nationalite_epouse` varchar(255) NOT NULL,
  `profession_epouse` varchar(255) NOT NULL,
  `ref_doc_epouse` varchar(255) NOT NULL,
  `domicile_epouse` varchar(255) NOT NULL,
  `noms_pere_epouse` varchar(255) NOT NULL,
  `noms_mere_epouse` varchar(255) NOT NULL,
  `chef_famille_epouse` varchar(255) NOT NULL,
  `temoin_epouse` varchar(255) NOT NULL,
  `matrimonial` varchar(255) NOT NULL,
  `regime` varchar(255) NOT NULL,
  `lieu_mariage` varchar(255) NOT NULL,
  `date_mariage` date NOT NULL,
  `secretaire` varchar(255) NOT NULL,
  `officier` varchar(255) NOT NULL,
  `ordering` int NOT NULL,
  `state` int NOT NULL,
  `date_renvoi` date NOT NULL,
  `date_trans` date NOT NULL,
  `date_publication` date NOT NULL,
  `dresse_le` date NOT NULL,
  `path_file` varchar(150) NOT NULL,
  `date_acte` date NOT NULL,
  `centre_etat` varchar(6) NOT NULL,
  `epoux_signature` varchar(255) NOT NULL,
  `epouse_signature` varchar(255) DEFAULT NULL,
  `photo_conjoints` varchar(255) NOT NULL,
  `dec_region` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_naissance`
--

DROP TABLE IF EXISTS `dim_naissance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_naissance` (
  `id_naiss` varchar(20) NOT NULL,
  `num_acte` varchar(20) NOT NULL,
  `noms_enfant` varchar(255) NOT NULL,
  `prenoms_enfant` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `date_naiss` date NOT NULL,
  `lieu_naiss` varchar(255) NOT NULL,
  `date_dec_naiss` date DEFAULT NULL,
  `noms_mere` varchar(255) NOT NULL,
  `date_mere` date NOT NULL,
  `lieu_mere` varchar(255) NOT NULL,
  `nationalite_mere` varchar(255) NOT NULL,
  `domicile_mere` varchar(255) NOT NULL,
  `profession_mere` varchar(255) DEFAULT NULL,
  `situation_matrimoniale_mere` varchar(100) DEFAULT NULL,
  `declarant` varchar(255) DEFAULT NULL,
  `qualite` varchar(255) DEFAULT NULL,
  `lieu_declaration` varchar(255) DEFAULT NULL,
  `noms_pere` varchar(255) DEFAULT NULL,
  `num_dec` varchar(255) DEFAULT NULL,
  `date_pere` date DEFAULT NULL,
  `domicile_pere` varchar(255) DEFAULT NULL,
  `ref_doc_mere` text,
  `type_ref_pere` varchar(100) DEFAULT NULL,
  `num_doc_ref_pere` text,
  `centre_etat` varchar(6) DEFAULT NULL,
  `lieu_pere` varchar(100) DEFAULT NULL,
  `profession_pere` varchar(255) DEFAULT NULL,
  `situation_matrimoniale_pere` varchar(100) DEFAULT NULL,
  `niveau_scol_pere` varchar(100) DEFAULT NULL,
  `nationalite_pere` varchar(100) DEFAULT NULL,
  `origine_dec` int DEFAULT '0',
  `ne_vers` text,
  `ne_vers_mere` text,
  `secretaire` varchar(255) DEFAULT NULL,
  `officier` varchar(255) DEFAULT NULL,
  `mentionMarg` text,
  `date_ajout` datetime NOT NULL,
  `libelle` varchar(255) NOT NULL,
  PRIMARY KEY (`id_naiss`,`date_ajout`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_publications`
--

DROP TABLE IF EXISTS `dim_publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_publications` (
  `num_dec` varchar(100) NOT NULL,
  `noms_epoux` varchar(255) NOT NULL,
  `date_naiss_epoux` date NOT NULL,
  `lieu_epoux` varchar(255) NOT NULL,
  `nationalite_epoux` varchar(255) NOT NULL,
  `profession_epoux` varchar(255) NOT NULL,
  `domicile_epoux` varchar(255) NOT NULL,
  `noms_pere_epoux` varchar(255) NOT NULL,
  `noms_mere_epoux` varchar(255) NOT NULL,
  `noms_epouse` varchar(255) NOT NULL,
  `date_naiss_epouse` date NOT NULL,
  `lieu_epouse` varchar(255) NOT NULL,
  `nationalite_epouse` varchar(255) NOT NULL,
  `domicile_epouse` varchar(255) NOT NULL,
  `profession_epouse` varchar(255) NOT NULL,
  `noms_pere_epouse` varchar(255) NOT NULL,
  `noms_mere_epouse` varchar(255) NOT NULL,
  `date_mariage` date NOT NULL,
  `date_publication` date NOT NULL,
  `lieu_mariage` varchar(255) NOT NULL,
  `ordering` int NOT NULL,
  `state` int NOT NULL,
  `type_ref_epoux` varchar(100) NOT NULL,
  `type_ref_epouse` varchar(100) NOT NULL,
  `secretaire` varchar(150) NOT NULL,
  `date_trans` date NOT NULL,
  `centre_etat` varchar(6) NOT NULL,
  `photo_conjoints` varchar(255) NOT NULL,
  `dec_region` varchar(255) NOT NULL,
  PRIMARY KEY (`num_dec`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_region`
--

DROP TABLE IF EXISTS `dim_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_region` (
  `code_region` varchar(255) NOT NULL,
  `libelle_region` varchar(255) NOT NULL,
  `created_by` int NOT NULL,
  `ordering` int NOT NULL,
  `lang` varchar(2) DEFAULT 'fr',
  PRIMARY KEY (`code_region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dim_status`
--

DROP TABLE IF EXISTS `dim_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dim_status` (
  `ordering` int NOT NULL,
  `checked_out` int NOT NULL,
  `checked_out_time` datetime NOT NULL,
  `created_by` int NOT NULL,
  `modified_by` int NOT NULL,
  `state` int NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `lang` varchar(255) NOT NULL,
  PRIMARY KEY (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `temps`
--

DROP TABLE IF EXISTS `temps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temps` (
  `date_key` int NOT NULL,
  `date_id` datetime DEFAULT NULL,
  `jour` varchar(10) DEFAULT NULL,
  `mois` varchar(10) DEFAULT NULL,
  `annee` varchar(0) DEFAULT NULL,
  PRIMARY KEY (`date_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-03 13:23:28

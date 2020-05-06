CREATE DATABASE healthcareapi;
use healthcareapi;

CREATE TABLE patient (
  pnic int NOT NULL,
  pname varchar(45) DEFAULT NULL,
  gender varchar(10) DEFAULT NULL,
  phonenumber varchar(10) DEFAULT NULL,
  username varchar(50) DEFAULT NULL,
  password varchar(10) DEFAULT NULL,
  PRIMARY KEY (pnic)
  );
  
  
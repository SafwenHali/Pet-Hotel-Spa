CREATE  TABLE IF NOT EXISTS `user` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `cin` VARCHAR(255) NOT NULL,
  `Adresse` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `pet_hotel_db`.`user` (`first_name`, `last_name`, `email`, `phone`, `cin`, `adresse`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', '00112233', 'dev house 0000', '2022-19-05 15:30:30');

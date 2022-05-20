CREATE  TABLE IF NOT EXISTS `user` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `cin` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `node_mysql_crud_db`.`user` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'Microsoft', 'Full Stack Developer', '50000.00', '1', '0', '2020-18-07 15:30:30');

INSERT INTO `node_mysql_crud_db`.`user` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Jane', 'Doe', 'janedoe@gmail.com', '9876543210', 'Google', 'Software Engineer', '44500.00', '1', '0', '2020-18-07 15:30:30');

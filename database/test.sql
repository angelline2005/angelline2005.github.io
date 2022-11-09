-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: db-html5_game
-- Generation Time: Sep 15, 2020 at 03:21 AM
-- Server version: 5.7.21-20-log
-- PHP Version: 5.6.33-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ludi_games_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE IF NOT EXISTS `token` (
  `user_id` int(11) unsigned NOT NULL,
  `refresh_token` varchar(512) NOT NULL,
  `common_token` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`user_id` int(11) unsigned NOT NULL,
  `email` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `third_party_id` varchar(64) NOT NULL,
  `user_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email_valid` tinyint(1) NOT NULL DEFAULT '0',
  `registration_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: email,1: google'
) ENGINE=InnoDB AUTO_INCREMENT=100000018 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `token`
--
ALTER TABLE `token`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`user_id`), ADD KEY `email` (`email`), ADD KEY `third_party_id` (`third_party_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=100000018;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `token`
--
ALTER TABLE `token`
ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

create database `performance`;
create table `user`(
	`id` bigint not null unique auto_increment,
	`account` varchar(50) primary key,
	`password`varchar(50),
	`name` varchar(50),
	`banch` varchar(50),
	`emp_id` varchar(50),
	`on_work_day` varchar(50),
	`position` varchar(5),
	`work_state` varchar(3)
);
create table `banch`(
	`id` bigint not null unique auto_increment,
	`banch` varchar(50) primary key
);
create table `performance_per_month`(
	`id` bigint not null unique auto_increment,
	`goal` varchar(1000),
	`year` int,
	`month` int,
	`account` varchar(50),
	`banch` varchar(50),
	`attitude` int,
	`efficiency` int,
	`professional` int,
	`directions` varchar(1000),
	`be_late` int,
	`day_off_not_on_rule` int            
);
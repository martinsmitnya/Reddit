CREATE TABLE posts_table (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(256) NOT NULL,
  url VARCHAR(256) NOT NULL,
  timestamp INT NOT NULL,
  score INT DEFAULT 0 NOT NULL,
  activity INT  DEFAULT 0 NOT NULL,
  PRIMARY KEY(id)
);


-- +-----------+--------------+------+-----+---------+----------------+
-- | Field     | Type         | Null | Key | Default | Extra          |
-- +-----------+--------------+------+-----+---------+----------------+
-- | id        | int          | NO   | PRI | NULL    | auto_increment |
-- | title     | varchar(256) | NO   |     | NULL    |                |
-- | url       | varchar(256) | NO   |     | NULL    |                |
-- | timestamp | int          | NO   |     | NULL    |                |
-- | score     | int          | NO   |     | 0       |                |
-- | activity  | int          | NO   |     | 1       |                |
-- +-----------+--------------+------+-----+---------+----------------+

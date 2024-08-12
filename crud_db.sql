create table items(
     id INT AUTO_INCREMENT PRIMARY KEY, 
     name VARCHAR(255),
     description TEXT

   );

create table user( 
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL

  );  

  
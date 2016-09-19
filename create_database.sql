-- Database name
codechallenge4
-- Document you create tables pSQL here
CREATE TABLE treats (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(25) UNIQUE,
	description VARCHAR(200),
	imageurl VARCHAR(400));

INSERT INTO treats(name, description, imageurl) VALUES ('cupcakes', 'yum!', 'https://lh3.googleusercontent.com/-qRYsOSe6w2I/URmXAfekqKI/AAAAAAAAeSQ/BaQY70YJyDM/s466/Grumpy-Cat-Pokey-Cat-Cupcake-Cake.jpeg');
INSERT INTO treats(name, description, imageurl) VALUES ('cakes', 'ew', 'https://s-media-cache-ak0.pinimg.com/236x/d9/8c/5e/d98c5e6ba5175a648744e3850cce7dc3.jpg');
INSERT INTO treats(name, description, imageurl) VALUES ('kitty snacks', 'love!', 'http://bostondog.co/wp-content/images/kitty-mouse.jpg');
INSERT INTO treats(name, description, imageurl) VALUES ('rawr', 'meow', 'https://i.ytimg.com/vi/et4xUWhz0X0/maxresdefault.jpg');

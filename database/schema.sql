create table users(
    id int primary key,
    name varchar(100),
    email varchar(100) unique,
    password text,
    role varchar(20) default 'user'

);
create table plans(
    id serial primary key,
    name varchar(50),
    price int,
    features text
);
create table subscriptions(
    id serial primary key,
    user_id int references users(id),
    plan_id int references plans(id),
    status varchar(20)
);
create table payments(
    id serial primary key,
    users_id int,
    amount int,
    payment_id text
);
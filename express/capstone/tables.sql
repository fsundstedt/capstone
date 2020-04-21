create table users (
    id serial primary key,
    first_name varchar,
    last_name varchar,
    email varchar,
    user_password varchar,
    is_admin varchar,
    contact_me varchar
);

create table companies (
    id serial primary key,
    company_name varchar
);

create table applications (
    id serial primary key,
    user_id integer references users(id),
    company_id integer references companies(id),
    city varchar,
    position varchar,
    position_description varchar,
    application_date date,
    offer_extended varchar,
    make_public varchar
);

create table interviews (
    id serial primary key,
    user_id integer references users(id),
    application_id integer references applications(id),
    company_id integer references companies(id),
    round varchar,
    interview_type varchar,
    interview_date date,
    interview_rating varchar,
    interviewer varchar,
    follow_up_person varchar,
    follow_up_phone varchar,
    follow_up_email varchar,
    whiteboarding varchar,
    code_challenge varchar,
    comments varchar
);

insert into users (first_name, last_name, email, user_password, is_admin, contact_me)
values ('Fred', 'Major', 'fred@email.com','password', 'yes', 'no'),
('Frank', 'Sundstedt', 'frank@email.com','password', 'no', 'yes'),
('Jennifer', 'Morales', 'jennifer@email.com','password', 'no', 'yes'),
('Ally', 'Brannon', 'ally@email.com','password', 'no', 'no');

insert into companies (company_name)
values ('DigitalCrafts'), ('Google'), ('Amazon'), ('Netflix');

insert into applications (user_id, company_id, city, position, position_description, application_date, offer_extended, make_public)
values 
(2, 1, 'Atlanta', 'Personal Assistant for Sean Reid', 'Dusting off toys, feeding cats, and delivering tacos', '2020-04-08', 'no', 'yes'),
(3, 2, 'San Francisco', 'Software Engineer', 'Building awesome stuff', '2020-04-18', 'yes', 'yes'),
(4, 3, 'New York', 'Software Developer', 'Software developing 24/7', '2020-04-30', 'yes', 'no');

insert into interviews (user_id, application_id, company_id, round, interview_type,
interview_date, interview_rating, interviewer, follow_up_person, follow_up_phone,
follow_up_email, whiteboarding, code_challenge, comments)
values
(2, 1, 1, 'Phone Screen', 'Phone Interview', '2020-04-08', 'Moderate', 'David Colon', 'David Colon', '1-800-David',
'david@email.com', 'no', 'yes', 'Phone screen lasted about half an hour. Seemed to be for the purpose of determining
whether or not I can tolerate excessive swearing and 80s references.'),
(2, 1, 1, '1st Round', 'Video Call', '2020-04-10', 'Difficult', 'Sean Reid', 'David Colon', '1-800-David',
'david@email.com', 'no', 'yes', 'Was quizzed on 80s movies, which I struggled with.');
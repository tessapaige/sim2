insert into Houses
(name, address, city, state, zipcode)
values ($1, $2, $3, $4, $5);

select * 
from Houses;
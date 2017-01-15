insert into userlogin
  (name,pass)
  values($1,$2)
returning name,pass

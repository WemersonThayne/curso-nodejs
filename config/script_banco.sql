create database portal_noticias;

use portal_noticas;

create table noticias(
	id_noticia int not null primary key auto_increment,
	titulo varchar(100),
	noticia text,
	data_criacao timestamp default current_timestamp
);

insert into noticias(titulo,noticia) values ('Titulo da Not�cia','Conteudo da Noticia');
insert into noticias(titulo,noticia) values ('Titulo da Not�cia 2','Conteudo da Noticia 2');
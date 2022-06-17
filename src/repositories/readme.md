
# Responsabilidades do Repository:
* só ele que se conecta com o banco;
* Ex: caso vc trocasse o Prisma por outro ORM, a unica manutenção que deveria ser feita, seria nos 'repositories'
* Normalmente, esse 'Repository' exporta essas funções:
    * create
    * findAll
    * delete
    * updete
    * findById

* Algumas regras pode estar no Repository, que são exclusivas do banco de dados.
* Não entra regra de negócio. Regra de negócio fica no Módulo/Service/UseCase
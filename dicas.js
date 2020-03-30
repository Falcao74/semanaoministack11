/*
    * Métodos HTTP:
    * GET:  Buscar/Listar informação do backend (retorno de informação)
    * POST: Criar uma informação para o backend (inserção de dados no banco) 
    * PUT: Alterar uma informação do backend (Update de dados)
    * DELETE: Apagar uma informação no backend (Apagar os dados)
*/

/*
    * Tipos de parâmetros:
    * Os parâmetros são recebidos pelos requests do método.
    * 
    * Query Params: Parâmetros nomeados após o "?" servem para (filtros, paginação - concatena com "&")
        exemplo: 
            http://localhost:3333/users?name=Joao&idade=44'
            app.get('/users', (req, resp) => {
                const params = req.query; 
            });
    * 
    * Route Params: Parâmetros utilizados para identificar recursos (um único recurso)
        exemplo:
            http://localhost:3333/users/1 
            app.get('/users/:id', (req, resp) => {
                const params = req.params; 
            });  
    * 
    * Request Body: Corpo da requisição, usado para criar ou alterar recursos
        exemplo: 
            mudar para post e colocar um json no corpo com os dados
            ** para o formato json ser suportado, é necessário informar: app.use(express.json());    
            app.get('/users/', (req, resp) => {
                const body = req.body;    
        }); 
    * 
*/
/*
        * Tipos de consultas aos bancos de dados:

        SQL:           SELECT * FROM users;

        Query Builder: table('users').select('*').where(); 
        Neste caso será usado KNEX.JS
*/


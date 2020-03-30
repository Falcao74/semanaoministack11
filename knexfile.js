// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    }
  },

  production: {
    client: 'mssql',  
    connection: {  
     user: 'sa',  
     password: '#password',  
     server: 'sa-aplic.database.windows.net',  
     database: 'master' 
    
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

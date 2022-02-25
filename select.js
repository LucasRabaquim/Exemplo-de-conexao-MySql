//"importa" o necessário para conexão com MySql
const mysql = require('mysql');

// Guarda toda as informações para fazer a conexão com o banco
const conexao = mysql.createConnection({
  host: "localhost",  // Local
  user: "root", // Usuário
  password: "1234567", // Senha
  database : 'Teste' // Nome do banco (não do Banco.db)
});

conexao.connect( function(err) { // Usa as informaçoes de "conexao" para se conectar
  if(err) throw err // err é o parametro de erro
  console.log("Conectado!"); // Se não der erro "Conectado!" aparece no console
});

conexao.query('select * from Usuario;',function(err,result,fields){
  console.log(result);
});
/*Conexao.query('Comando SQL', funcao(parametro de erro, resultado (se for uma pesquisa), campos){
  Comandos que quiser, como console.log() para mostrar o resultado
});*/

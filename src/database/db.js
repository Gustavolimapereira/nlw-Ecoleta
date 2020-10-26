const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db
db.serialize(() => {

   //db.run(`
    //    create table if not exists places (
      //      id integer primary key autoincrement,
       //     image text,
        //    name text, 
         //   address text,
          //  address2 text,
         //   state text,
         //   city text,
         //   items text
       // );
   // `)
   // const query = `
    //        insert into places (
    //            image,
    //            name,
    //            address,
    //            address2,
     //           state,
     //           city,
     //           items
     //       ) values (?,?,?,?,?,?,?);
      //      `
   // const values = [
    //    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
     //   "Papersider",
      //  "Guilherme Gemballa, Jardin América",
     //   "Nº 260",
     //   "Santa Catarina",
     //   "Rio do Sul",
      //  "Papéis e Papelão"

    //]

    // function afterInsertData(err) {
      //  if (err) {
       //     return console.log(err)
       // }
       // console.log("cadastrado com sucesso")
       // console.log(this)
   // }

   // db.run(query, values, afterInsertData)
    db.all(`select * from places`, function (err, rows) {
       if (err) {
         return console.log(err)
       }
       console.log("Aqui estão seus registros")
       console.log(rows)
   })
   // db.run(`delete from places where id = ?`, [15], function (err) {
     // if (err) {
      //   return console.log(err)
   // }
  // console.log("Registro deletado com sucesso")
  // })



 })
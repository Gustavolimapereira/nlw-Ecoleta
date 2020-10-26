const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const db = require("./database/db.js")

server.use(express.urlencoded({ extended: true }))

server.use(express.static("public"))
nunjucks.configure("src/views", {
   express: server,
   noCache: true
})

server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/create-point", (req, res) => {

   return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

   const query = `
           insert into places (
               image,
               name,
               address,
               address2,
              state,
              city,
              items
          ) values (?,?,?,?,?,?,?);
         `
   const values = [
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items,
   ]

   function afterInsertData(err) {
      if (err) {
         return console.log(err)
      }
      console.log("cadastrado com sucesso")
      console.log(this)

      return res.render("create-point.html", {saved: true})
   }
   db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
   const search = req.query.search

   if(search == ""){
      return res.render("search-results.html", { total: 0 })
   }


   db.all(`select * from places where city like '%${search}%' `, function (err, rows) {
      if (err) {
         return console.log(err)
      }
      const total = rows.length
      return res.render("search-results.html", { places: rows, total })
   })
})

//server.get("/search-results", (req,res) => {
//    res.sendFile(__dirname + "/views/search-results.html")
//})

server.listen(3000)
const fs = require('fs');
//const {FileArray} = require('express-fileupload');
const path = require('path');
const axios = require('axios');

const controller = {

    getFile: (req,res) =>{
        var file = req.params.name;
        //res.json("hola");
        var path_file = 'backend/txts/'+file;
        
        /*El método exist esta obsoleto y ya no funciona, ahora se utiliza el método "access" para
        la obtención de archivos*/
        fs.access(path_file, fs.constants.F_OK, (err)=>{
            if(!err)
            {
                return res.sendFile(path.resolve(path_file));
            }
            else
            {
                return res.status(404).send({message:"No existe el fichero a cargar"});
            }
        })
    },

    uploadFile:(req,res)=>{
        let EDFile = req.files.file
        EDFile.mv(`backend/txts/${EDFile.name}`,err => {
            if(err) return res.status(500).send({ message : err })
    
            return res.status(200).send({ message : 'File upload' })
        })
    },

    apiCall:async(req,res)=>{
        var file = req.params.name;
        //res.json("hola");
        var path_file = 'backend/txts/'+file;
        const data = null;
        fs.readFile(path_file, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            const headers = {
                "Accept": "application/json",
                'Content-Type': 'application/json'
              }
            axios.post("https://sentim-api.herokuapp.com/api/v1/",JSON.stringify({text:data}),{headers: headers}).then((response) => {
                res.send(response.data);
            })
               
            })
    },

    getAllFiles:async(req, res)=>{
        fs.readdir('backend/txts', function (err, archivos) {
            if (err) {
            onError(err);
            res.status(500).json("wrong");
            }
            res.status(200).json(archivos);
            });
    }
}


module.exports = controller;
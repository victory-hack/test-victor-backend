'use strict'
import dataDefault from "../sourcedata/mail-data.json";

class EmailController {

    static index(req, res){
        res.status(200).json(dataDefault)
    }
    
}

export default EmailController

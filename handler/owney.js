const axios = require('axios');

class Owney {
    constructor(apiKey) {
        this.header = {
            "authorization": "Bearer " + apiKey,
            "content-type": "application/json"
        }

        this.body = {};
    }

    templateCode(templateCode){
        this.body.templateCode = templateCode;
        return this;
    }

    fromName(fromName){
        this.body.fromName = fromName;
        return this;
    }

    fromEmail(fromEmail){
        this.body.fromEmail = fromEmail;
        return this;
    }

    subject(subject){
        this.body.subject = subject;
        return this;
    }

    context(context){
        this.body.context = context;
        return this;
    }

    to(to){
        this.body.to = to;
        return this;
    }

    cc(cc){
        this.body.cc = cc;
        return this;
    }

    bcc(bcc){
        this.body.bcc = bcc;
        return this;
    }
    
    async send(){
        let axiosConfig = {
            headers: this.header
        };
        
        var output = await axios.post('https://owneymail.com/api/v1/owney/go/', this.body, axiosConfig)
            .then((res) => {                
                return res.data;
            })
            .catch((err) => {
                return err.response.data;
            })       
            
        return output;
    }
}

module.exports = Owney;
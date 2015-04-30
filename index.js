var request = require('request');
var base = "http://api.emailhunter.co/v1/";

module.exports = function(APIKey){

    var key = APIKey;

    var callAPI = function(type,attr,next){

        if(! attr.api_key)
            attr.api_key = key;

        var queryString = [];
        for(var name in attr)
            queryString.push(name+'='+attr[name]);

        request([base,type,'?',queryString.join('&')].join(''), function (error, response, body) {

            if (error)
                return next(error,null);

            try{
                var obj = JSON.parse(body);
            }catch(e){
                var obj = false ;
            }

            if(! obj)
                return next({error:'cannot parse JSON'},null);

            if(obj.status != 'success')
                return next(obj,null);

            return next(null,obj);
        })
    }

    return {

        setKey: function(APIKey){
            key = APIKey
        },

        search: function(domain,next){
            return callAPI('search',{domain:domain},function(err,data){
                if(err)
                    return next(err,null);
                return next(null,data.emails);
            });
        },

        exist: function(email,next){
            return callAPI('exist',{email:email},function(err,data){
                if(err)
                    return next(err,null);
                return next(null,data.sources);
            });
        }
    }

}
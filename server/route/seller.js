var seller = require('../model/sellers');

exports.sellers = function(req, res){
    var name= req.body.name;
    var area = req.body.area;
    var city = req.body.city;
    var district = req.body.district;
    var state = req.body.state;

    var newSeller = new seller({
        name:name,
        // address:{
            area:area,
            city:city,
            district:district,
            state:state
        // }
    });

    seller.findOne(({name:name , area:area}), function(err,event){
        if(err){
            res.send({status:false, message:"Error occured while fetching data", err});
        }
        else if(event == null){
            newSeller.save(function(err, event){
                if(err){
                    res.send({status:false, message:"Error occured while register", err});
                }
                else{
                    res.send({status:true, message:"Registered Successfully", event})
                    console.log(event)
                }
            })
        }
        else{
            res.send({status:false, message:"seller already exists"})
        }
    })
}

exports.sellersList= function(req,res){
    seller.find(function(err,event){
        if(err){
            res.send({status:false, message:"Error occured While getting sellers list"});
        }
        else{
            res.send(event);
        }
    })
};
module.exports = (function() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host:"127.0.0.1",
        user:'root',
        password: 'student',
        database: 'airbnb'
    });
    
    // var con = mysql.createConnection({
    //     host:"exampledb.chvmirnvwpa9.us-east-2.rds.amazonaws.com",
    //     user:'root',
    //     password: 'student79',
    //     database: 'AirBnb'
    // });

    function getLocations(id, handleData) {
        let sql = '';
        console.log("Connection successful");
        if (id == 0) {
            sql = "SELECT locationID, cityID, price, locationName,\
                    smallImageUrl, rating, ratingCount, maxGuests FROM locations";
            con.query(sql, function (err, result) { 
                if (err)  throw err; 
                handleData(result);
            });            
        }
        else {
            let location = {};
            sql = `SELECT l.*, c.cityName, co.countryName
                    FROM locations l JOIN cities c
                    ON l.cityID = c.cityID AND l.locationID = ${id}
                    JOIN countries co ON c.countryID = co.countryID;`;
            con.query(sql, function (err, result) { 
                if (err)  throw err;
                location = result;
                sql = `SELECT * FROM reviews${id}`;
                con.query(sql, function (err, result) { 
                    if (err)  throw err;
                    location[0].reviews = result;
                    handleData(location[0]); 
                }); 
            });       
        }
    }

    function getCities(handleData) {
        let sql = "SELECT * FROM cities;";       
        con.query(sql, function (err, result) { 
            if (err)  throw err;            
            handleData(result);
        });
        //con.end();
    }

    return {
        getLocations: getLocations,
        getCities: getCities
    }

})();




// con.connect(function(err) {
//             let sql = '';
//             if (err) throw err;            
//             console.log("Connection successful");
//             if (id == 0) {
//                 sql = "SELECT locationID, cityID, price, locationName,\
//                         smallImageUrl, rating, ratingCount, maxGuests FROM locations";
//                 con.query(sql, function (err, result) { 
//                     if (err)  throw err; 
//                     handleData(result);
//                 });            
//             }
//             else {
//                 let location = {};
//                 sql = `SELECT l.*, c.cityName, co.countryName
//                         FROM locations l JOIN cities c
//                         ON l.cityID = c.cityID AND l.locationID = ${id}
//                         JOIN countries co ON c.countryID = co.countryID;`;
//                 con.query(sql, function (err, result) { 
//                     if (err)  throw err;
//                     location = result;
//                     sql = `SELECT * FROM reviews${id}`;
//                     con.query(sql, function (err, result) { 
//                         if (err)  throw err;
//                         location[0].reviews = result;
//                         handleData(location[0]); 
//                     }); 
//                 });       
//             }
//         });
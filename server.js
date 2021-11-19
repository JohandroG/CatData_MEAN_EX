const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

const cats = [{
	name: "Michi",
	food: "Hamborguesa",
	age: 5,
	picture: "cat1.jpg",
	sleepingspots: ["In a box", "In your bed"]
},
{
	name: "Karen",
	food: "sushi",
	age: 2,
	picture: "cat2.jpg",
	sleepingspots: ["In a box outside", "In your bed sometimes"]
},
{
	name: "Bonifasio y Michika",
	food: "Papitas",
	age: 1,
	picture: "cat3.jpg",
	sleepingspots: ["Togheter", "In your face"]
}
]


app.get('/', function( request, response ){
	response.render( 'index' ); 
});

app.get('/cats', function( request, response ){
	response.render( 'cats' , {cats}); 
});


app.get('/cats/:name', function( request, response ){
	let name = request.params.name;

	let result = cats.find( cat => {
        if( cat.name === name ){
            return cat;
        }
    });

    if( result === undefined ){
        response.render( 'catinfo', { found: false } );
    }
    else{
        response.render( 'catinfo', { found: true, cat: result } );
    }
});


app.listen(8080, function(){
    console.log('Hello')
})


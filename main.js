var books = 0;

function read(number){
    books = books + number;
    document.getElementById("books").innerHTML = books;
};

var students = 0;

function buyStudent(){
    var StudentCost = Math.floor(10 * Math.pow(1.1,students));     //works out the cost of this cursor
    if(books >= StudentCost){                                   //checks that the player can afford the cursor
        students = students + 1;                                   //increases number of cursors
    	books = books - StudentCost;                          //removes the cookies spent
        document.getElementById('students').innerHTML = students;  //updates the number of cursors for the user
        document.getElementById('books').innerHTML = books;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,students));       //works out the cost of the next cursor
    document.getElementById('StudentCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var save = {
	books = books
	students = students
}


function newGame(){
	students = 0;
	books = 0;
	  document.getElementById('students').innerHTML = students;
	  document.getElementById('books').innerHTML = books;
}

window.setInterval(function(){
	
	read(students);
	
}, 1000);

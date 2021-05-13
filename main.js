var name_of_guest = [];
function add(){
    var newguest = document.getElementById("input_name").value;
    name_of_guest.push(newguest);
    document.getElementById("input_name").innerHTML = "";
    console.log(name_of_guest);
}

function show(){
    var display_guest_array = [];
    for (var k = 0; k < name_of_guest.length; k++) {
        display_guest_array.push("<h4> Guest - " + name_of_guest[k] + "<h4>");
        console.log(name_of_guest);
    }
    document.getElementById("display_array").innerHTML = display_guest_array;
    console.log(display_guest_array);

    name_of_guest.sort();
    console.log(name_of_guest);
    var display_nog_array = [];
    var length_nog = name_of_guest.length;

    console.log(length_nog);
    for (var k = 0; k < length_nog; k++) {
        display_nog_array.push("<h4>Guest - " + name_of_guest[k] + "</h4>");
        console.log(display_nog_array);
    }
    
    document.getElementById("display_array_sort").innerHTML = display_nog_array;
}

function search(){
    var s = document.getElementById("searchname").value;
    var found = 0;
    for(var j=0; j < name_of_guest.length; j++){
        if(s==name_of_guest[j]){
            found=found+1;
        }
    }
    document.getElementById("searchlist").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+"times/s");

}
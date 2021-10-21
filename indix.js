const toDosList =[];


const delItem = (item) =>{

    toDosList.splice(item, 1);
    count--
    $("#par").text(`You have Entered ${count} Tasks`);
    renderList();
}

const editItem = (item) => {
   if ($('.text2').val().length ) {

    let iput3 = $('.text2').val()
    toDosList[item] = {name: iput3,isCompleted:false}

    renderList();}
}


const renderList = ()=> {

$(".ulist1").html("")
for (let index = 0; index < toDosList.length; index++) {

    $(".ulist1").append(`<li> ${toDosList[index].name}  </li> <button class="btn btn-link btn-warning" id="btnEdit-${index}"> Edit </button> <button class="btnDel btn btn-danger  btn-link" id="btnDel-${index}"> Remove </button>`);
    $(`#btnDel-${index}`).click(()=>{delItem(index)});
    $("#btnEdit-"+index).click(()=>{editItem(index)});
     

}

}
let count=0;
const Count =() => {

    count++
    $("#par").text(`You have Entered ${count} Tasks`);
}



const addToList = () => {
    if ($('.text1').val().length ){
    let iputV = $('.text1').val()
    const obj = {name: iputV,isCompleted:false}
    toDosList.push(obj)
    Count();
    renderList();}
}

const clearList = ()=> {

    toDosList.length = 0;
    count =0
    $("#par").text(`You have Entered ${count} Tasks`)
    renderList();
}



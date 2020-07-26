var list = document.getElementById('list')


function todo(){
    var val = document.getElementById('todo-item')
    var li = document.createElement('li')
    var litext = document.createTextNode(val.value)
    li.appendChild(litext)
    list.appendChild(li)

    // this is button section

    var delbtn = document.createElement('button')
    var deltext = document.createTextNode('Delet')
    delbtn.setAttribute('class','delbtn')
    delbtn.setAttribute('onclick','delbtn(this)')
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)


    // this is edit section
    var edit = document.createElement('button')
    var edittex = document.createTextNode('Edit')
    edit.setAttribute('class','editbtn')
    edit.setAttribute('onclick','editbtn(this)')
    edit.appendChild(edittex)
    li.appendChild(edit)

    val.value = ""

    console.log(li)
}

function editbtn(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt('Enter your value',val)
    e.parentNode.firstChild.nodeValue = editval
}


function delbtn(e){
    e.parentNode.remove()
}


function delall(){
    list.innerHTML = ""
}
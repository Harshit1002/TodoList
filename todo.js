
  var item="";
  var btn=document.querySelector("#b1")
  var btn2=document.querySelector("#b2")


  function changeContent(){
    item= document.querySelector(".texttag");
    var input=document.querySelector("#textinput");
    item=item.value
     var ul=document.querySelector("ul");
     var textnode=document.createTextNode(item);

     if (item==="")
        return false;
    else {
      var li=document.createElement("li");
      var checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.setAttribute("id","check");
      var label=document.createElement("label");

      ul.appendChild(li);
      ul.appendChild(label);

      li.appendChild(checkbox);
      li.appendChild(label);
      label.appendChild(textnode);

      ul.insertBefore(li,ul.childNodes[0]);

      setTimeout(()=>
    {
      li.className="visual";
    },2);
    input.value="";
}
};

  btn.addEventListener('click',changeContent  );
  /* Act on the event */
  function removeTodo(){
    var checkbox=document.querySelectorAll("#check");
    var parent=document.querySelector("ul")
    var child=document.querySelectorAll('li')
    for(var i=0;i<checkbox.length;i++)
    {
      list=child[i]
      if(checkbox[i].checked)
      {
        list.className='change';
        
          //parent.removeChild(list);

      }
    }
  };

  btn2.addEventListener("click",removeTodo);

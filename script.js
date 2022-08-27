function valid()
{
    var a=document.forms["myform"]["jname"].value;
    var b=document.forms["myform"]["jid"].value;
    var c=document.forms["myform"]["prior"].value;
    const formData = new FormData();
    formData.append('key1',a );
    formData.append('key2',b );
    formData.append('key3',c );
    
    for (const value of formData.values()) {
      console.log(value);
    }  
  
}






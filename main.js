var images=[ "my family1.jpg","dad.jpg", "mom.jpg", "sister.jpg", "me.jpg"];
var names=["My family","Dad","mom","Sister","me"]
 var i=0;
 function nextslide()
 {
    i++; 
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
{
    i=0;
}
var updateimage=images[i];
var updatename=names[i];
document.getElementById("image1").src=updateimage;
 document.getElementById("name").innerHTML=updatename;
 }
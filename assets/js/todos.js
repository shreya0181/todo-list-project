// alert("Connected!");
// $("li").css("color","red");

//

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
// $("ul").on("click", "li", function(){
// 	$(this).css("color","pink");
// 	// toggleClass("completed");
// });
$("ul").on("click","span",function(event){
    $(this).parent().remove();
    event.stopPropagation();
});
$("input[type='text'").keypress( function(event){
	if(event.which === 13)
	{
		// 
		var x=$(this).val();
		$(this).val("");
		$("ul").append("<li> <span><i class='fa fa-trash'></i> </span> "+x+"</li>")
		$(this).addClass("completed");
		// alert("Connected!");
	}

});
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

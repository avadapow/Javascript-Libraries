/* Lazy loading javasript library */
/* 
*	@url: the url containing the json data
*	@item_to_append: The preset item you want to append
*	@id_to_append_elements: container for the appended elements
*	@message_to_show_in_the_end: the message you want the user to see in the end
*/
function avadapow_lazyload(url, item_to_append, id_to_append_elements, message_to_show_in_the_end){
	var item = $(item_to_append).html();
	$(item_to_append).remove();
	var matches = item.match(/\{\{([^}]+)\}\}/g);
	// Searches for elements inside {{element}}
	var json_result =  null;
	$.ajax({async: false,cache: false,url: url, success: function(result){
        json_result = result;
    }}); // making ajax request to json data

    var items_array = new Array();
	for(j in json_result){
		var temp_item = item;
		for(i in matches){
			console.log(j);
			console.log(matches[i]);
			var json_item = matches[i].replace("{{", "").replace("}}", "");
			var html_item = matches[i];
			var result_to_replace = json_result[j][json_item];
			temp_item = temp_item.replace(html_item, result_to_replace);
		}
		items_array.push(temp_item);
	}
	console.log(items_array);
	var total_products = items_array.length;
    var last_index = 0;
    var reached_the_end = 0;
    while( last_index < 10){//pasting first 10 elements
    	$(id_to_append_elements).append(items_array[last_index]).show('slow');
	 	last_index++;
    }
    $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() > $(document).height() - 800) { // lazy loading json data
       if(last_index < (total_products)){
		 $(id_to_append_elements).append(items_array[last_index]).show('slow');
		 last_index++;
       }else{
         reached_the_end++;
         if(reached_the_end == 1){
            $(id_to_append_elements).append("<h3 style='text-align:center;color:#868686;'>"+ message_to_show_in_the_end +"</h3>");
         }else{

         }
       }
      }
    });
  }
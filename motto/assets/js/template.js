/**
 * template
 */

var template = (function($) { var _ = {

	/**
	 * Initialize
	 */
	init: function() {
		var config = [  
						{  
						    "thumbnail":"images/thumbs/01.jpg",  
						    "image":"images/fulls/01.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
						{  
						    "thumbnail":"images/thumbs/02.jpg",  
						    "image":"images/fulls/02.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
						{  
						    "thumbnail":"images/thumbs/03.jpg",  
						    "image":"images/fulls/03.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
						{  
						    "thumbnail":"images/thumbs/04.jpg",  
						    "image":"images/fulls/04.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
						{  
						    "thumbnail":"images/thumbs/05.jpg",  
						    "image":"images/fulls/05.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
						{  
						    "thumbnail":"images/thumbs/06.jpg",  
						    "image":"images/fulls/06.jpg",
						    "title":"嘻嘻哈哈",
						    "description":"嘻嘻哈哈哈哈哈哈哈"
						}, 
					   ];
		var markup = '<article><a class="thumbnail" href="${image}" data-position="left center"><img src="${thumbnail}" alt="" /></a><h2>${title}</h2><p>${description}</p></article>';
		$.template( "articleTemplate", markup);
		$("#thumbnails").html($.tmpl( "articleTemplate", config));
	},

}; return _; })(jQuery); template.init();
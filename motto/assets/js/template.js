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
						    "title":"偏执",
						    "description":"突然有些明白了为什么好多小说里最牛逼的两个人，一定要在结尾干一架？因为他们真的都认为自己是正确的，并且对此深信不疑。"
						}, 
						{  
						    "thumbnail":"images/thumbs/02.jpg",  
						    "image":"images/fulls/02.jpg",
						    "title":"坚韧",
						    "description":"遇到问题不要想着去逃避，也不要着急抱怨。姑且静下心来仔细想想，其实问题并没有想象中的复杂。所以，请别让抵触情绪阻止你前进的脚步。"
						}, 
						{  
						    "thumbnail":"images/thumbs/03.jpg",  
						    "image":"images/fulls/03.jpg",
						    "title":"孤独",
						    "description":"lonely kid hides in heart."
						}, 
						{  
						    "thumbnail":"images/thumbs/04.jpg",  
						    "image":"images/fulls/04.jpg",
						    "title":"信仰",
						    "description":"信自己也是一种信仰。"
						}, 
						{  
						    "thumbnail":"images/thumbs/05.jpg",  
						    "image":"images/fulls/05.jpg",
						    "title":"学习",
						    "description":"如果你想学好一件事情，那就去和这个领域里最牛逼的人去学。"
						}, 
						{  
						    "thumbnail":"images/thumbs/06.jpg",  
						    "image":"images/fulls/06.jpg",
						    "title":"努力",
						    "description":"如果你真的愿意去努力，你人生最坏的结果，也不过是大器晚成。"
						}, 
					   ];
		var markup = '<article><a class="thumbnail" href="${image}" data-position="left center"><img src="${thumbnail}" alt="" /></a><h2>${title}</h2><p>${description}</p></article>';
		$.template( "articleTemplate", markup);
		$("#thumbnails").html($.tmpl( "articleTemplate", config));
	},

}; return _; })(jQuery); template.init();
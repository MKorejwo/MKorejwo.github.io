var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries = [
		{ 'title':'Virtus Pro',
			'when':'Kazachstan 10.12.2019',
			'thumbnailUrl':'/img/virtus.png'
	},
		{ 'title':'Fnatic',
			'when':'Szwecja 10.10.2015',
			'thumbnailUrl':'/img/fnatic.png'
	},
		{ 'title':'G2',
			'when':'Francja 12.01.2020',
			'thumbnailUrl':'/img/g2.png'
	},
		{ 'title':'Liquid',
			'when':'Ameryka i Kanada 23.04.2014',
			'thumbnailUrl':'/img/liquid.png'
	},
		{ 'title':'Vitality',
			'when':'Francja 25.06.2016',
			'thumbnailUrl':'/img/vita.png'
	},
	
	];
	$scope.sortList = [
{
'label':'Alfabetycznie',
'value':'title'
},
{
'label':'Chronologicznie',
'value':'when'
},
{
'label':'Od Najnowszych',
'value':'-when'
},
]; 
	$scope.orderProp = 'when'; 
}); 
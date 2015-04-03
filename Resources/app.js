Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	backgroundColor: '#000000'
});

var view = Ti.UI.createView({
		top: '0px',
		height: '10%'
});

var label1 = Ti.UI.createLabel({
	text : 'Build professional networks and develop leadership skills by becoming active in one or more of the following student clubs and organizations:',
	color : '#ffd700',
	top: '0px',
	font: {fontSize: 12},
	textAlign : 'left'
});

var tableData = [ 'American Marketing Association', 'Beta Alpha Psi and the Student Accounting Association', 
'Distinguished Sophomore Business Club', 'Economics Club', 'Financial Management Association', 'Management Information Systems Association',
'PGA Golf Management Club', 'Operation Management Club', 'Human Resource Management Club' ];

var table = Ti.UI.createTableView({
	title: 'Click for more information',
	color: '#ffd700',
	top: '100px',
  	data: tableData,
});

allRows = [];

for (var i=0; i<tableData.length; i++){
	
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#000000',
			color: '#ffd700'
		});
	};
	
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#ffd700',
			color: '#000000'
		});
	};
	
	allRows.push(theRow);	
};

table.setData(allRows);
view.add(label1);
win.add(view);
win.add(table);
win.open();
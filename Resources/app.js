Ti.UI.backgroundColor = 'white';
var winLand = Ti.UI.createWindow({
	backgroundColor: '#000000'
});

var view = Ti.UI.createView({
		top: '0px',
		height: '10%'
});

var label = Ti.UI.createLabel({
	text : 'Build professional networks and develop leadership skills by becoming active in one or more of the following student clubs and organizations. Please click one for more information',
	color : '#ffd700',
	top: '0px',
	font: {fontSize: 12},
	textAlign : 'left'
});

var tableData = [ 'American Marketing Association', 'Beta Alpha Psi and the Student Accounting Association', 
'Distinguished Sophomore Business Club', 'Economics Club', 'Financial Management Association', 'Management Information Systems Association',
'PGA Golf Management Club', 'Operation Management Club', 'Human Resource Management Club' ];

var table = Ti.UI.createTableView({
	top: '100px',
  	data: tableData,
});

allRows = [];

for (var i=0; i<tableData.length; i++){
	
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#000000',
			color: '#ffd700',
			clubInfo: tableData[i]
		});
	};
	
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#ffd700',
			color: '#000000',
			clubInfo: tableData[i]
		});
	};
	
	allRows.push(theRow);	
};

table.setData(allRows);
view.add(label);
winLand.add(view);
winLand.add(table);
winLand.open();

function openWindow(club){
	var indicator = club.charAt (0);

	if(indicator == 'A'){
		var win1 = Ti.UI.createWindow();
		var view1 = Ti.UI.createView();
		var label1 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'American Marketing Association (AMA): A national organization for students, academics and professionals. Join as early as your freshman year to learn about marketing career opportunities. Faculty Advisor: Sanjay Sisodiya'
		});
		var button1 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height : 50,
			top : '75%'
		});
		var buttonView1 = Ti.UI.createView({
			top: '75%'
		});
		var button1 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView1.add(button1);
		win1.add(buttonView1);				
		view1.add(label1);
		win1.add(button1);
		win1.add(view1);
		win1.open();
		button1.addEventListener('click', function(e){
			button1open();	});
		return 0;
	};
	if(indicator == 'B'){
		var win2 = Ti.UI.createWindow({
	
		});
		var view2 = Ti.UI.createView();
		var label2 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA): A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. Faculty Advisor: Jane Weiss'
		});
		var button2 = Ti.UI.createButton({
			title: 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView2 = Ti.UI.createView({
			top: '75%'
		});
		var button2 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView2.add(button2);
		win9.add(buttonView9);		
		view2.add(label2);
		win2.add(button2);
		win2.add(view2);
		win2.open();
		button2.addEventListener('click', function(e){
			button2open();	});
		return 0;
	};
	if(indicator == 'D'){
		var win3 = Ti.UI.createWindow({
	
		});
		var view3 = Ti.UI.createView();
		var label3 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Distinguished Sophomore Business Club: A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance ones career opportunities. Faculty Advisor: Daniel Borgia'
		});
		var button3 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView3 = Ti.UI.createView({
			top: '75%'
		});
		var button3 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView3.add(button3);
		win3.add(buttonView3);		
		view3.add(label3);
		win3.add(button3);
		win3.add(view3);
		win3.open();
		button3.addEventListener('click', function(e){
			button3open();	});
		return 0;		
	};
	if(indicator == 'E'){
		var win4 = Ti.UI.createWindow({
	
		});
		var view4 = Ti.UI.createView();	
		var label4 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Economics Club: A great way to learn abut the major before you take more than the introductory economics classes required by all university majors, is to participate in Econ Club meetings throughout the year. The club also helps attract and present a variety of guest speakers practicing economics in a variety of careers.  Faculty Advisor: Steve Peterson.  '
		});
		var button4 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView4 = Ti.UI.createView({
			top: '75%'
		});
		var button4 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView4.add(button4);
		win4.add(buttonView4);		
		view4.add(label4);
		win4.add(button4);
		win4.add(view4);
		win4.open();
		button4.addEventListener('click', function(e){
			button4open();	});	
		return 0;
	};
	if(indicator == 'F'){
		var win5 = Ti.UI.createWindow({
	
		});
		var view5 = Ti.UI.createView();
		var label5 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Financial Management Association (FMA): A great way to learn about the major before you take any finance classes; participate in meetings throughout the semester. Guest speakers to talk about finance in the workplace. Faculty Advisor, Tom Liesz.  '
		});
		var button5 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView5 = Ti.UI.createView({
			top: '75%'
		});
		var button5 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView5.add(button5);
		win5.add(buttonView5);		
		view5.add(label5);
		win5.add(button5);
		win5.add(view5);
		win5.open();
		button5.addEventListener('click', function(e){
			button5open();	});
		return 0;
	};
	if(indicator == 'M'){
		var win6 = Ti.UI.createWindow({
	
		});
		var view6 =Ti.UI.createView();
		var label6 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Management Information Systems Association (MISA): Find out about your major before you even take any Information Systems (IS) classes. Speakers visit regularly from businesses interested in hiring after graduation. Students take field trips to visit businesses in Spokane and Seattle. Become involved with Vandal cybercasting, a MISA activity. Faculty Advisor: Lori Baker-Eveleth.'
		});
		var button6 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView6 = Ti.UI.createView({
			top: '75%'
		});
		var button6 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView6.add(button6);
		win6.add(buttonView6);		
		view6.add(label6);
		win6.add(button6);
		win6.add(view6);
		win6.open();
		button6.addEventListener('click', function(e){
			button6open();	});
		return 0;
	};
	if(indicator == 'P'){
		var win7 = Ti.UI.createWindow({
	
		});
		var view7 = Ti.UI.createView();
		var label7 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'PGA Golf Management Club: A student organization for students in the PGA Golf Management Program. Faculty Advisor: Cole Mize.'
		});
		var button7 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView7 = Ti.UI.createView({
			top: '75%'
		});
		var button7 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView7.add(button7);
		win7.add(buttonView7);		
		view7.add(label7);
		win7.add(button7);
		win7.add(view7);
		win7.open();
		button7.addEventListener('click', function(e){
			button7open();	});
		return 0;
	};
	if(indicator == 'O'){
		var win8 = Ti.UI.createWindow({
	
		});
		var view8 = Ti.UI.createView();
		var label8 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Operation Management Club: The Operation Management club is a good place to find out more about the major. The club is made up of students in the majors and anyone else interested in operations management. The club takes tours of area manufacturing operations, invites in guest speakers (particularly from companies that recruit POM majors), attends meetings of the American Production and Inventory Control Society (APICS - a professional society made up mostly of managers working in operations), and meets occasionally for social activities. All students are welcome to attend Operation Management club meetings. Faculty Advisor: John Lawrence.'
		});
		var button8 = Ti.UI.createButton({
			title : 'Contact Information',
			color: '#ffd700',
			height: 50,
			top: '75%'
		});
		var buttonView8 = Ti.UI.createView({
			top: '75%'
		});
		var button8 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView8.add(button8);
		win8.add(buttonView8);		
		view8.add(label8);
		win8.add(button8);
		win8.add(view8);
		win8.open();
		button8.addEventListener('click', function(e){
			button8open();	});
		return 0;
	};
	if(indicator == 'H'){
		var win9 = Ti.UI.createWindow({
	
		});
		var view9 = Ti.UI.createView();
		var label9 = Ti.UI.createLabel ({
			borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color: '#ffd700',
			top:10,
			fontsize:14,
			text: 'Human Resource Management Club: A student chapter of the national Society for Human Resource Management (SHRM). There are approximately 350 student chapters found on various campuses nationwide. SHRM is a national processional organization of human resource practitioners, educators, and various professionals involved with human resources. Faculty Advisor: Jan Rauk.  '
		});
		var buttonView9 = Ti.UI.createView({
			top: '75%'
		});
		var button9 = Ti.UI.createButton({
			title : 'Contact Information',
			height: 50,
			width: '100%'
			//top: '75%'
		});
		buttonView9.add(button9);
		win9.add(buttonView9);
		view9.add(label9);
		win9.add(view9);
		win9.open();
		button9.addEventListener('click', function(e){
			button9open();	});
	};
	//return null;
};

table.addEventListener('click', function(e)
	{openWindow(e.source.clubInfo); });
//button9.addEventListener('click', function(e){
//	button9open();	});	
function button9open(){
	var win91 = Ti.UI.createWindow({
				backgroundColor: '#000000',
				title: 'Contact Information'
	});
			
	var view91 = Ti.UI.createView({
				
	});
	
	var label91 = Ti.UI.createLabel({
		text: 'Jan Rauk',
		text: 'Phone:	(208) 885-0147',
	    text: 'Email:	jrauk@uidaho.edu'
	});
	view91.add(label91);
	win91.add(view91);
	win91.open();
	return 0;
};
function button8open(){
	var win81 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
	});
	
	var view81 = Ti.UI.createView({
		
	});
	
	var label81 = Ti.UI.createLabel({
		text: 'John Lawrence',
		text: 'Phone:	(208) 885-5821',
	    text: 'Email:	jjl@uidaho.edu'
	});
	
	view81.add(label81);
	win81.add(view81);
	win81.open();
	return 0;
};

function button7open(){
	var win71 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
	});

	var view71 = Ti.UI.createView({
		
	});
	
	var label71 = Ti.UI.createLabel({
		text: 'Cole Mize',
		text: 'Phone:	(208) 885-9772',
	    text: 'Email:	colem@uidaho.edu'
	});

	view71.add(label71);
	win71.add(view71);
	win71.open();
	return 0;
};

function button6open(){
	var win61 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view61 = Ti.UI.createView({
		
	});
	
	var label61 = Ti.UI.createLabel({
		text: 'Lori Baker-Eveleth',
		text: 'Phone:	(208) 885-5940',
	    text: 'Email:	leveleth@uidaho.edu'
	});
	
	view61.add(label61);
	win61.add(view61);
	win61.open();
	return 0;
};
function button5open(){
	var win51 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view51 = Ti.UI.createView({
		
	});
	
	var label51 = Ti.UI.createLabel({
		text: 'Tom Leisz',
		text: 'Phone:	(208) 885-5447',
	    text: 'Email:	tliesz@uidaho.edu'
	});
	
	view51.add(label51);
	win51.add(view51);
	win51.open();
	return 0;
};
function button4open(){
	var win41 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view41 = Ti.UI.createView({
		
	});
	
	var label41 = Ti.UI.createLabel({
		text: 'Steven Peterson',
		text: 'Phone:	(208) 885-5730',
	    text: 'Email:	stevenp@uidaho.edu'
	});
	
	view41.add(label41);
	win41.add(view41);
	win41.open();
	return 0;
};

function button3open(){
	var win31 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view31 = Ti.UI.createView({
		
	});
	
	var label31 = Ti.UI.createLabel({
		text: 'Daniel Borgia',
		text: 'Phone:	(208) 885-6800',
	    text: 'Email:	dborgia@uidaho.edu'
	});

	view31.add(label31);
	win31.add(view31);
	win31.open();
	return 0;
};
function button2open(){
	var win21 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view21 = Ti.UI.createView({
		
	});
	
	var label21 = Ti.UI.createLabel({
		text: 'Jane Weiss',
		text: 'Phone:	(208) 885-5750',
	    text: 'Email:	jmweiss@uidaho.edu'
	});
	
	view21.add(label21);
	win21.add(view21);
	win21.open();
	return 0;
};
function button1open(){
	var win11 = Ti.UI.createWindow({
		backgroundColor: '#000000',
		title: 'Contact Information'
	});
	
	var view11 = Ti.UI.createView({
		
	});
	
	var label111 = Ti.UI.createLabel({
		text: 'Sanjay Sisodiya',
		text: 'Phone:	(208) 885-0267',
	    text: 'Email:	sisodiya@uidaho.edu'
	});
	
	view11.add(label111);
	win11.add(view11);
	win11.open();
	return 0;
};

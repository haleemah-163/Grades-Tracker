'use strict';
function Students(studentname , studentGrade , course) {
    this.studentname = studentname;
    this.studentGrade=studentGrade;
    this.course=course;
}

function RenderRandomGrade(){
    var grade= math.floor(math.random()*100);
    Students.studentGrade.push(this) = grade;
}

function RenderTable(){


 
var table= document.getElementById('table');
var firstRow= document.createElement('tr');

var namecell = document.createElement('td');

namecell.textContent=Students.studentname;
firstRow.appendChild('namecell');

var gradecell = document.createElement('td');

gradecell.textContent=Students.studentGrade;
firstRow.appendChild('gradecell');

var coursecell = document.createElement('td');

coursecell.textContent=Students.course;
firstRow.appendChild('coursecell');
table.appendChild(firstRow);
}
RenderTable();
//////////////////////////////////////////////////
function localSt(){
var data= JSON.stringify(Students);
localStorage.setItem('storedData','data');

var parsedData= JSON.parse('storedData');

if (Students != null) {
    Students=parsedData;
}

}

document.getElementById("submit").addEventListener("click",RenderTable);
 
localSt();
RenderTable();


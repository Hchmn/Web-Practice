// Create a students.js, which:
// 1. Asks for a number n of students to enter.
// 2. Asks for student details n times: First Name, Middle Initial, Last Name, Birthdate, number of units enrolled.
// 3. Display in students.html all students entered in one table, with only 4 columns "Full Name", Birthdate, Age, Tuition. The table should be sorted by Family Name. Tuition is 1234.56 per unit.

// Your program should (at least) utilize:
// 1. objects
// 2. arrays
// 3. functions
// 4. for..in loops
// 5. string manipulation methods
// 6. Date object
// 7. prompt()s to collect input
// 8. only 1 document.write() to output final data to the HTML document

// Zip your files into yourfamilyname.zip and upload it into Exercise4 (a Google Drive folder, whose link you should have received via email).

    var students = new Array();
    let number = numberStudents();
    let i = 0;

    while(i < number){

        var student_detail = new Array(4)
        let first_name = window.prompt("Enter First Name");
        let middle_initial = window.prompt("Enter Middle Initial");
        let last_name = window.prompt("Enter Last Name");
        student_detail[0] = last_name + " " + first_name + " " + middle_initial;

        let date = window.prompt("Enter Birthdate YYYY-MM-DD (ex. 1999-09-13)");
        let num_units = parseInt(window.prompt("Enter Number of Units"));
        student_detail[1] = new Date(date);
        student_detail[2] = get_age(new Date(date));
        student_detail[3] = (num_units * 1234.56).toFixed(2);

        students.push(student_detail);
        i++;
    }

    function numberStudents(){
        let num_students = parseInt(window.prompt("Enter the Number of Students"));
        return num_students;
    }

    function get_age(dateOfBirth){
        var diff_ms = Date.now() - dateOfBirth.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    let students_sorted = sortFamilyName(students);

    function sortFamilyName(studs){
        var temp;
            for(x = 0; x < studs.length-1; x++){  
                for(i = 0; i < studs.length-1; i++){
                    if(studs[i][0].split(' ')[0] > studs[i+1][0].split(' ')[0] ){
                        temp = studs[i+1];
                        studs[i+1] = studs[i];
                        studs[i] = temp;
                    }
                }
            }
        return students;
    }
    

    let name = 1;
    let table = "<table style='font-size:20px; font-family:Cambria; border:1px solid black;'>";
    let thead = "<thead> <tr> <th style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black;'>Full Name</th>" + 
                "<th style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black;'>Birthday</th>" + 
                "<th style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black;'>Age</th>" + 
                "<th style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black;'>Tuition</th></tr>" +"</thead>";

    let tbody = "<tbody>"; 
    let tdata = "";

    for(let i = 0; i < students_sorted.length; i++){
        let tr_open = "<tr>";
        let tr_close = "</tr>";
        let month = String(students_sorted[i][1].getMonth());
        let date = String(students_sorted[i][1].getDate());
        let getMonth = String(get_Month(month));

        let year = String(students_sorted[i][1].getFullYear());
        let Birthdate = getMonth + " " + date + ", " + year;
        let td = "<td style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black; text-align:left;'>"
                + students_sorted[i][0] + "</td>"+
                "<td style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black; text-align:left   ;'>"
                + Birthdate + "</td>"+
                "<td style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black; text-align:center;'>"
                + students_sorted[i][2] + "</td>"+ 
                "<td style='padding-right:12px;padding-top:12px; padding-bottom:12px; border:1px solid black; text-align:center;'>"
                + students_sorted[i][3] + "</td>";
        let tr = tr_open + td + tr_close;
        tdata+=tr;
    }
    let tbody_close_tag = "</tbody>";
                

    let close_tag = "</table>";
    let html = table + thead + tbody + tdata +tbody_close_tag + close_tag;
    document.write(html);

    function get_Month(month){
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[parseInt(month)];
    }
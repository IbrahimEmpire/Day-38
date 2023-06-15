studentData = [
    {
            "id": 1,
            "name": "Mohamed Ibrhaim",
            "Batch": "B43WDTamil",
            "month":"october",
                "Task": "Not Submitted",
                "Attendance": "Present",
                "Codekata": 40,
            "tasks" : "react route,react context, react Crud",
            "topics":"Response Cycle, Array, Objects",
                "date":new Date("2022-10-15"),
                "mentors":{
                    "name":"Sanjay",
                    "count": 8
                },
                "companydrive" : {
                    "ZOHo" : "Meet, Connect and Hire our trained freshers. They are hand picked with multiple levels of pre-assessment and trained for 3 months in Fullstack development by technologists from product companies",
                    "Infosys" : "We pre assess the coding skills matching your requirement. Get access to hire the cream freshers across colleges",
                    "Williams Teck" : "Robust e-recruitment platform for evaluating the coding skill and to capture the behavioral pattern of the candidates. If you want to a hire a right candidate who has hands-on expertise and would expertise and would like to know more about his way of approaching problem.",
                    "date":new Date("2022-10-15"),
                },
                "placement":{
                    "student1" : "ibrahim",
                    "student2" : "kannan",
                   
                }

    },
    {
        "id": 2,
        "name": "kannan",
        "Batch": "B43WDTamil",
        "month":"october",
            "Task": "Submitted",
            "Attendance": "Present",
            "Codekata": 32,
        "tasks" : "react route,react context, react Crud",
        "topics":"Response Cycle, Array, Objects",
            "date":new Date("2022-10-28"),
            "mentors":{
                "name":"Sangeetha Sanmuham",
                "count": 20
            },
            "companydrive" : {
                "ZOHO" : "Meet, Connect and Hire our trained freshers. They are hand picked with multiple levels of pre-assessment and trained for 3 months in Fullstack development by technologists from product companies",
                "Infosys" : "We pre assess the coding skills matching your requirement. Get access to hire the cream freshers across colleges",
                "Williams Teck" : "Robust e-recruitment platform for evaluating the coding skill and to capture the behavioral pattern of the candidates. If you want to a hire a right candidate who has hands-on expertise and would expertise and would like to know more about his way of approaching problem.",
                "date":new Date("2022-10-28"),
            },
            "placement":{
                "student1" : "vinayak",
                "student2" : "kalai selvam",
               
            }

}
    


]


// 1. Find all the topics and tasks which are thought in the month of October

db.zen.find({month:{$eq : "october"}},{_id:0,tasks:1,topics:1})

// 2. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

      db.zen.find({Task:{$eq:"Not Submitted"}},{_id:0,Task:1,name:1})
      db.zen.find({$and:[ { Task:{$eq:"Not Submitted"} },{ Attendance:{$eq:"Absent"} },{date:{$gt: ISODate("2022-10-15"),
      $lt: ISODate("2022-10-31")}} ] }).count()

// 3. Find the number of problems solved by the user in codekata

db.zen.find({},{_id:0,Codekata:1,name:1})

// 4. Find all the mentors with who has the mentee's count more than 15

db.zen.find({"mentors.count":{$gt:15}},{_id:0,mentors:1})

//5.  Find all the company drives and students who are appeared for the placement

db.zen.find({},{_id:0,companydrive:1,placement:1})

// 6. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
 
db.zen.find({"companydrive.date":{$gt: ISODate("2022-10-15"),
$lt: ISODate("2022-10-31")}},{_id:0,companydrive:1})
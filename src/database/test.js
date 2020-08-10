const Database= require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {

        name: "Leonardo Agostini",
        avatar: "https://pbs.twimg.com/profile_images/1291857218170687488/bLD5yDDR_400x400.jpg",
        whatsapp: "991720437", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
        

        
    },

    classValue = {
        
        subject: 1,
        cost: "20"
    },

    classScheduleValues = [{


        weekday: 1, 
        time_from: 720,
        time_to: 1220

    }, 
    {

        weekday: 0, 
        time_from: 520,
        time_to: 1220

    }    
    ]

        
   await createProffy(db, {proffyValue, classValue, classScheduleValues})
   //const selectedProffys= await db.all("SELECT * FROM proffys")
   //console.log (selectedProffys)

  // const selectClassesAndProffys = await db.all(`
   
  // Select classes.*, proffys.*
   //FROM proffys
   //JOIN classes ON (classes.proffy_id=proffys.id)
   //WHERE classes.proffy_id = 1;
   
  // `)
  // console.log (selectClassesAndProffys)

   /*const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "1300"
   
   `)
   console.log (selectClassesSchedules)
*/

})

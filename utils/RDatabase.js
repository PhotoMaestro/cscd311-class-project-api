const
    Student = require("../Models/student"),
    Hall = require("../Models/hall"),
    Room = require("../Models/Room");

let student = [
    { name: "Kwame Nwom",
     _id: 99012123, 
     pin: 11111
      },

    { name: "Fada Ntiri",
     _id: 11239021,
      pin: 11111
       },

    { name: "Bless Odoi",
     _id: 33291032, 
     pin: 11111
      },

    { name: "Rasta Dodo",
     _id: 10011234,
      pin: 11111 
  },

    { name: "Lata Kaka", 
    _id: 11394332,
     pin: 11111
 },

    { name: "Fausti Fafa", 
    _id: 10928363,
     pin: 11111
      },

    { name: "Retro Gang",
     _id: 10394830, 
     pin: 11111
      },

    { name: "Michael Soil", 
    _id: 20397392,
     pin: 11111 
 },

    { name: "Adjei Nkrumah",
     _id: 90294739,
      pin: 11111
       },

    { name: "Forgive Papa",
     _id: 10928638,
      pin: 11111 
  }
]

let hall = [
    "Commonwealth",
     "Akuafo",
      "Volta",
       "Legon", 
       "Mensah Sarbah",
    "Hilla Limann",
     "Jean Nelson", 
     "Alexander Kwapong",
      "Elizabeth Sey"
];

let roomLetters = ["A", "B", "C"];

async function clearDatabase() {
    try {
        await Student.collection.drop();
        await Hall.collection.drop();
        await Room.collection.drop();
    }
    catch (err) { }
}

async function initStudents() {
    for (let i = 0; i < students.length; i++) {
        let s = new Student(students[i]);
        await s.save();
    }
}

async function initHalls() {
    for (let i = 0; i < hall.length; i++) {
        let hall = new Hall({ name: hall[i] });
        await hall.save();
        for (let i = 0; i < 20; i++) {
            let name = roomLetters[i % 4] + ((i % 5) + 1);
            let room = new Room({ name, hall: hall.id });
            await room.save();
        }
    }
}

module.exports = async () => {
    await clearDatabase();
    await initStudents();
    await initHalls();
}
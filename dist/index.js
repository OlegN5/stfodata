
const firebaseConfig = {
    apiKey: "AIzaSyBFtqYG8OVlI4E8VdBEMW9mLCBhfeUHHeI",
    authDomain: "stimeforone.firebaseapp.com",
    projectId: "stimeforone",
    storageBucket: "stimeforone.appspot.com",
    messagingSenderId: "302327929792",
    appId: "1:302327929792:web:7f6a874a88fc988fc28625",
    measurementId: "G-WF2R2WM1Y6"
    };
     // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();

// let myName



//     let changeN = document.querySelector('#sname')
// changeN.addEventListener('change', function() {
//     sname = document.querySelector('#sname').value
    
//     if (sname == 1) {
//             myName = 'Олег'
//         } else if (sname == 2) {
//             myName = 'Марк'
//         } else if (sname == 3) {
//             myName = 'Саша'
//         } else if (sname == 4) {
//             myName = 'Костя'
//         } else if (sname == 5) {
//             myName = 'Сергей'
//         }
// })



db.collection("users").where("timeStart", ">", new Date('2021-02-19T09:00:00'))
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //debugger
            //debugger
            console.log(doc.id, " => ", doc.data()); 
            let my = doc.data()
            console.log('my', my)
           
            let tStart = new Date(0)
            
            tStart.setSeconds(my.timeStart.seconds)
            let tStop = new Date(0)
            tStop.setSeconds(my.timeStop.seconds)
            console.log(`tStart`,tStart.toUTCString())


            

            let duration = my.timeStop.seconds - my.timeStart.seconds
            let dur = new Date(0)
            dur.setSeconds(duration)
            let durAll = dur.toISOString().substr(11, 8);

            let Tittle = my.Title
            let commit = my.Commit
            let brak = my.Brak
            let full = my.Full
            let id = my.ID
            let myName = my.name
            //console.log(sdata)
            if (full === true) {
                full = `Полностью`
            } else if (full === false) {
                full = `Частично`
            }


            if (myName === `Олег`) {
                myName = `Новиков О.А.`
            } else if (myName === `Марк`) {
                myName = `Наумов М.А.`
            } else if (myName === `Костя`) {
                myName = `Ясинский К.С.`
            } else if (myName === `Саша`) {
                myName = `Линкевич А.В.`
            } else if (myName === `Сергей`) {
                myName = `Измайлов С.В`
            } else if (myName === `Инна`) {
                myName = `Непомнящая И.Ю.`
            }

            if (id.length > 10) {
                id = id.substring(0,15)+ `...`
                console.log(`id`,id)
            }

            // const formatter = new Intl.DateTimeFormat('ru', { month: 'short' });
            // const month1 = formatter.format(new Date());
            let text = `
            <tr>
                <td>${tStart.toDateString().split('202')[0]}</td>
                <td>${tStart.toTimeString().split(` `)[0]}</td>
                <td>${tStop.toTimeString().split(` `)[0]}</td>
                <td>${id}</td>
                <td>${Tittle}</td>
                <td>${full}</td>
                <td>${myName}</td>
            </tr>`

            // let text = `<div class="container">
            // <div class="row">
            //   <div class="col-2">
            //   ${tStart.toDateString()}
            //   </div>
            //   <div class="col">
            //   ${tStart.toTimeString().split(` `)[0]}
            //   </div>
            //   <div class="col-2">
            //   ${tStop.toDateString()}
            //   </div>
            //   <div class="col">
            //   ${tStop.toTimeString().split(` `)[0]}
            //   </div>
            //   <div class="col-sm">
            //   ${id}
            //   </div>
            //   <div class="col-2">
            //   ${Tittle}
            //   </div>
            //   <div class="col-sm">
            //   ${full}
            //   </div>
            //   <div class="col-sm">
            //   ${myName}
            //   </div>
            // </div>
            // `



            // let text = `<dl class="row">
            // <dt class="col-sm-3">ID</dt>
            // <dd class="col-sm-9">${id}</dd>

            // <dt class="col-sm-3">Название</dt>
            // <dd class="col-sm-9">${Tittle}</dd>

            // <dt class="col-sm-3">Звукорежиссер</dt>
            // <dd class="col-sm-9">${myName} </dd>

            // <dt class="col-sm-3">начал</dt>
            // <dd class="col-sm-9">${tStart}</dd>

            // <dt class="col-sm-3">закончил</dt>
            // <dd class="col-sm-9">${tStop}</dd>

            // <dt class="col-sm-3">длительность</dt>
            // <dd class="col-sm-9">${durAll}</dd>

            // <dt class="col-sm-3">целиком</dt>
            // <dd class="col-sm-9">${full}</dd>

            // <dt class="col-sm-3">Брак</dt>
            // <dd class="col-sm-9">${brak}</dd>

            // <dt class="col-sm-3">Комментарий</dt>
            // <dd class="col-sm-9">${commit}</dd>
            
            // </dl>
            // <p>--------------------------------------------------------------</p>`
            document.querySelector('#data').insertAdjacentHTML('beforeend', `${text}`)
            
        });

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

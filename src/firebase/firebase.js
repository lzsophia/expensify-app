import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
  const database=firebase.database();
  /*database.ref().set({
      name: "sophia",
      location: "New York",
      isSingle: false,
      favorite: 'pizza'
  }).then(()=>{
      console.log('Data is saved');
  }).catch((e)=>{
      console.log("This faile.", e);
  });
database.ref('isSingle').remove().then(()=>{
    console.log('data was removed');
}).catch((e)=>{
    console.log('did not remove data', e);
});

database.ref().update({
    name: 'Mike',
    location: 'Austin'
});*/

/* //fetch data once
database.ref().once('value')
.then((snapshot)=>{
    const val=snapshot.val();
    console.log(val);
})
.catch((e)=>{console.log('Error fetching data',e)})*/

/*// subscribe to changes
database.ref().on('value', (snapshot)=>{
    console.log(snapshot.val())
}, (e)=>{
    console.log('Error with data fetching', e);
});*/

/*database.ref('expenses')
.once('value')
.then((snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapShot)=>{
        expenses.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
        })
    })
    console.log(expenses);
});
// child_removed
database.ref('expenses')
.on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses')
.on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses')
.on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});*/
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default};
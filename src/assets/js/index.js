const functions=require("firebase-functions");

const admin=require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const algoliasearch=require("algoliasearch");
const algolia=algoliasearch(functions.config().algolia.appid,functions.config().algolia.adminkey);



exports.updateIndex=functions.database.ref("/slike/{slikaId}").onWrite(event=>{
    const index=algolia.initIndex("slike");
    const slikaId=event.params.slikaId

    const data=event.data.val()
      if(!data){
          return index.deleteObject(slikaId,(err)=>{
           if(err)throw err


           console.log("slike removed from angolia index",slikaId)
          });
      }

    data["objectID"]=slikaId


    return index.saveObject(data,(err,content)=>{
if(err)throw err
console.log("slike updated in angolia index",data.objectID)
    });
});
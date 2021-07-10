function Use_handle(){
     //define handles here
     const actions =  require("./actions.js").default;// label, ref to socket, and most important: redux action
     console.log("actions are");
     console.log(actions)
     const _handles={
          //handles go here
          ...actions,

          // connect dispatch
          set_dispatch:(d)=>{
               console.log("setting dispatch: should hit once!");
               for(const p in _handles){
                    if(_handles[p]?.type==="handle"){
                         _handles[p].set_dispatch(d);
                    }
               }
          },
             
          //auto listen for all handles
          listen_all:()=>{
               for(const p in _handles){
                    if(_handles[p]?.type==="handle"){
                         _handles[p].listen();
                    }
               }
          }
          
     }

     //returning this object with list of handles, and function to connect dispatch to every handle
     return _handles;
}

export default Use_handle;
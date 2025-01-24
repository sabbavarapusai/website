function home(){
  const pin = 9160
  let x = +prompt("please enter 4 digit pin ")
  const res = x=== pin;
  if(res){
    alert("crebit Granted");
    window.location.href= "index.html";
  }else{
    alert("Denied");
  }
  }
  
function hac(){
    const pin = 9160
    let x = +prompt("please enter 4 digit pin ")
    const res = x=== pin;
    if(res){
      alert("Granted");
      window.location.href= "account.html";
    }else{
      alert("Denied");
    }
    }
    
    function cdit(){
      const pin = 9160
      let x = +prompt("please enter 4 digit pin ")
      const res = x=== pin;
      if(res){
        alert("crebit Granted");
        window.location.href= "credit.html";
      }else{
        alert("Denied");
      }
      }
    
      function dit(){
        const pin = 9160
        let x = +prompt("please enter 4 digit pin ")
        const res = x=== pin;
        if(res){
          alert(" debit Granted");
          window.location.href= "debit.html";
        }else{
          alert("Denied");
        }
        }
    
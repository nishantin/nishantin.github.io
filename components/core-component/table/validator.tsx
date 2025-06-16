export const validateColumnSettings =(isAllColumnUnChecked:boolean) =>{
     if(!isAllColumnUnChecked){
          alert("Please select at least one column");
          return false;
     }
     return true;         
}
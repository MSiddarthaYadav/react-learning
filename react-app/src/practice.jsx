import {useState,useEffect} from "react";
function useWindowWidth(){
  const[width,setWidth]=useState(window.innerWidth);
  useEffect(()=>{
    window.onresize=()=>setWidth(window.innerWidth);
  },[]);
return width;
}
export default useWindowWidth;
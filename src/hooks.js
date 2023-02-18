
import {useState, useEffect} from "react"

const Hooks =()=>{

     //Array with 2 values
     const state = useState();
     //console.log(state);

    

     const [count, setCount] = useState(0);

      //Empty Array means it will be called only when page refreshes for the first time
      useEffect(()=>{
        alert("Called");
        document.title = `you clicked me ${count} times`
    })

     //Array destructuring : 

    //  const names=["john","sita","Gita"];

    //  const [name1, name2, name3] = names;

    //  console.log(name1);
    //  console.log(name2);



    //let count = 5;
    
        const IncreaseNumber = () =>{
            setCount(count + 1);
           
            console.log("Count is : "+count)
        }
        return(
            <>
                <h1> {count} </h1>
                <button onClick={IncreaseNumber}>Click me</button>
            </>
        )
    }
    
    export default Hooks;
// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Todos from './Components/Todos';
// import React, { useState } from 'react';
// import AddTodo from './Components/AddTodo';



// function App()

//   {
//     const onDelete=(todo)=>{
//       console.log("i am delete",todo);
//       setTodos(todos.filter((e)=>{
// return e!==todo;
//       }));
//        }
//        const addTodo=(title,desc)=>{
//         console.log("I am Adding todo",title,desc)
//         }
//   // let myVariable = 330;
//   const [todos,setTodos]=useState([
//     {
//       sno:1,
//       title:"go to the market",
//       desc:"you need to go to market",
//     },

//     {
//       sno:2,
//       title:"go to the mall",
//       desc:"you need to go to mall",
//     },
//     {
//       sno:3,
//       title:"go to the shop",
//       desc:"you need to go to shop",
//     },
//   ]);
//   return (
//     <div>
//       <Header title="my todolist" search={false}/>
//       <AddTodo addtodo={addTodo}/>
//       <Todos todos={todos} onDelete={onDelete}/>
//       <Footer/>
      

//          </div>
//   );
// }
  

// export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import React, { useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "go to the market",
            desc: "you need to go to market",
        },
        {
            sno: 2,
            title: "go to the mall",
            desc: "you need to go to mall",
        },
        {
            sno: 3,
            title: "go to the shop",
            desc: "you need to go to shop",
        },
    ]);

    const onDelete = (todo) => {
        console.log("I am delete", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    };

    const addTodo = (title, desc) => {
        console.log("I am Adding todo", title, desc);
        let sno;
        if(todos.length==0){
          sno=0;
        }
        else{
           sno=todos[todos.length-1].sno+1;
        
        }
        const myTodo={
          sno:sno,
          title:title,
          desc:desc,
        }
        setTodos([...todos,myTodo]);
        console.log(myTodo);
    };

    return (
        <div>
            <Header title="my todolist" search={false} />
            <AddTodo addTodo={addTodo} /> {/* Corrected prop name */}
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </div>
    );
}

export default App;

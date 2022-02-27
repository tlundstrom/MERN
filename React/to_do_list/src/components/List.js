import react, {useState} from "react";

const List = (props) => {

    const {tasks, setTasks} = props;

    const handleDelete = (e, name) => {
        setTasks(tasks.filter(task => task.name !== name ));
    }

    const handleCheck = (index) => {
        const newTasks = tasks.map((task, i) =>{
            if(index === i){
                const newTask = {...task, completed: !task.completed}
                return newTask;
                
            }
            return task
        });

        setTasks(newTasks);
    }

    return(
        <div>
            
            {tasks.map((task, index) => {
                const tasksClasses = [];

                if(task.completed){
                    tasksClasses.push('finished');
                }
                return(

                <div key={index}>
                    <input  
                        type="checkbox" 
                        checked={task.completed}
                        onChange={(e) => handleCheck(index)}
                    />
                    <p className={tasksClasses.join(" ")}>{task.name}</p>
                    <button onClick={(e) => handleDelete(e, task.name)}>Delete</button>
                </div>
                )}
            )}
        </div>
    )
}

export default List
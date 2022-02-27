import react, {useState} from "react";

const Input = (props) => {

    const {tasks, setTasks} = props;
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.length !== 0){
            setTasks([...tasks,
                {
                    name: item,
                    completed: false
                }
            ]);
        }
        setItem("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={item} onChange = {(e) => setItem(e.target.value)} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default Input
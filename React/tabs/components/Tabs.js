import react, {useState} from "react";

const Tabs = (props) => {

    
    const {tabs} = props;
    const {selected, setSelected} = props;

   const tabHandler = (e, index) => {
    setSelected(tabs[index]);
    e.target.className = "Selected";
   }

    return (
        <div>
            {tabs.map((tab, index) => (
                <div key = {index}
                    style = {{ 
                        display : "inline-block",
                        margin : "15px",
                        padding:"10px",
                        border:"1px solid black",
                        borderRadius:"10px",
                        }}
                    onClick = {(e) =>tabHandler(e, index)}>
                        <p>{tab.label + (index +1)}</p>
                    </div>
                    
            ))
            }
        </div>
    )
}

export default Tabs
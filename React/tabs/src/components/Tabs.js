import react, {useState} from "react";

const Tabs = (props) => {

    
    const {tabs} = props;
    const {selected, setSelected} = props;

   const tabHandler = (index) => {
    setSelected(tabs[index]);
   }

    return (
        <div>
            {tabs.map((tab, index) => (
                <div key = {index}
                    style = {{ 
                        display : "inline-block",
                        margin : "15px",
                        }}
                    onClick = {(e) =>tabHandler(index)}>
                        <p>{tab.label + (index +1)}</p>
                    </div>
                    
            ))
            }
        </div>
    )
}

export default Tabs
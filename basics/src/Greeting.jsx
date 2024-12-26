import react from 'react'

export default function Greeting (props) {
return (
    <div>
        <h3>Hello {props.name}</h3>
    </div>
);
}

// props : are the inputs that pass from one component to another to control its behaviour
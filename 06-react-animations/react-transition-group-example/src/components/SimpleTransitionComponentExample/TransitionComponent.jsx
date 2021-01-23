import { Transition } from 'react-transition-group';
import { Button } from '@material-ui/core';
import { useState } from 'react';
export default function Transitioncomponent(props) {

    const [isShow, setIsShow] = useState(false);
    const showBlockHandler = () => {
        setIsShow(!isShow);
    }
    const duration = 1000;
    const transitionStyles = {
        entering: { opacity: 0.3, transform: 'translateY(100%)' },
        entered: { opacity: 1, transform: 'translateY(0%)' },
        exiting: { opacity: 0.3 },
        exited: { opacity: 0 },
    };
    const animationStyle = {
        opacity: 0,
        transition: `all ${duration}ms ease-out`
    }

    const element = (<Transition in={isShow}
        timeout={duration}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("on Eneter")}
        onEntering={() => console.log("on Enetering")}
        onEntered={() => console.log("on Enetered")}
        onExit={() => console.log("on Exit")}
        onExiting={() => console.log("on Exiting")}
        onExited={() => console.log("on Exited")}
    >

        {state => {
            return (<div style={{ ...animationStyle, ...transitionStyles[state] }}>
                <p>hello 😄 jelly</p>
                <p>animation status: {state}</p>
            </div>);
        }}
    </Transition>);

    return (
        <div>
            {element}
            <Button variant="contained" color="primary" onClick={showBlockHandler}>
                Toggle Show Block
            </Button>
        </div>
    )
}

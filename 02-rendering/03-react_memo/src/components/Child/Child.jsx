import React from 'react';

function Child({ message }) {
    console.log("Render - Child");
    return (
        <div className="Child">
            {message}
        </div>
    )
}

export default React.memo(Child);


// import React, { PureComponent } from 'react'

// export default class Child extends PureComponent {
//     // constructor(props) {
//     //     super(props)
//     // }
//     render() {
//         console.log("Render - Child")
//         return (
//             <div className="Child">
//                 {this.props.message}
//             </div>)
//     }
// }

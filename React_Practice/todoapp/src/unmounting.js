import React from 'react'

class AppInner extends React.Component {
    componentWillUnmount() {
        console.log("This component will unmount")
    }
    render() {
        return <div>Inner component</div>
    }
}

class Test extends React.Component {
    state = {innerComponent: <AppInner/>}
    componentDidMount() {
        setTimeout(() => {
            this.setState({innerComponent:<div>unmounted</div>})
        }, 5000)
    }
    render() {
        console.log("Inside render")
        return (
            <div>
                {this.state.innerComponent}
            </div>
        )
    }
}

export default Test;

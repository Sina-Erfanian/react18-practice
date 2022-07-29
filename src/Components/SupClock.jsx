import { Component } from "react";

class SupClock extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    shouldComponentUpdate () {
        return true
    }

    getSnapshotBeforeUpdate (prevProp , prevState) {
        return {prevProp , prevState}
    }

    componentDidUpdate (prevProp , prevState , snapshot) {
        console.log(snapshot);
    }

    // componentDidMount() {

    // }

    // componentWillUnmount() {
    //     alert("delete")
    // }

    render () {
        const {date , color} = this.props

        let styles = {
            color : color ? "tomato" : "black"
        }
        return (
          <>
            <p style={styles}>{date.toLocaleTimeString()}</p>
          </>
        );
    }
}

export default SupClock
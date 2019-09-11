import * as React from 'react'
import { connect } from "react-redux"

interface Props {
  start: string,
}


const App: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <h1>{props.start}</h1>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    start: state.start
  }
}




export default connect(mapStateToProps, null)(App);

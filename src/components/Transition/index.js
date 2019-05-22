import React from "react";
import posed, { PoseGroup } from "react-pose";


const timeout = 250

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: { delay: timeout, delayChildren: timeout, beforeChildren: true  },
    })

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer initialPose="exit" pose="enter"  key={location.key}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
import * as React from "react"

interface GridProps {
 name: string,
}
const Grid: React.SFC<GridProps> = ({name}) => {
 return <h1>Grid: {name}</h1>;
}
Grid.defaultProps = {
 name: "My Area",
}

export default Grid

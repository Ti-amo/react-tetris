import React from 'react'
import Row from '../Row/Row'


class PlayArea extends React.Component{
    render(){
    const { field } = this.props;
    return (
        <div className="field" style={{margin: 2}}>
            {field.map((row, i) =>
                <Row key={i} row={row} />
            )}
        </div>
    )}
}

export default PlayArea;
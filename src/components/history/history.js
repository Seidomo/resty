import React from 'react';

import './history.scss';

class History extends React.Component {

  render() {
    return (
      <>
        <div className='history'>
          <ul>
            {this.props.results.map(item => 
              <li key={Math.random}>
                <span className={`method ${item.method}`}>{`${item.method}`}</span>
                <button className='history'>{`${item.input}`}</button>
              </li>
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default History;
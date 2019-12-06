import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            margin: '20px 0px',
            background: 'white',
          }}
        >
          <img
            src={this.props.image}
            alt=""
            style={{
              marginBottom: '-35px',
            }}
          />
          <p
            style={{
              color: '#c87373',
              fontWeight: 700,
              fontFamily: 'YuGothicUI-Bold, Yu Gothic UI',
              fontSize: '20px',
            }}
          >
            {this.props.title}
          </p>
        </div>
      </>
    )
  }
}

export default Card

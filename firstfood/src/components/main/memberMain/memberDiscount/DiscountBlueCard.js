import React from 'react'

class DiscountCard extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            margin: '30px 20px',
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
              color: '#133072',
              fontWeight: 700,
              fontFamily: 'YuGothicUI-Bold, Yu Gothic UI',
              fontSize: '20px',
              margin: '0 20px',
            }}
          >
            {this.props.title}
          </p>
        </div>
      </>
    )
  }
}

export default DiscountCard

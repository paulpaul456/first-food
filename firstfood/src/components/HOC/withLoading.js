import React from 'react'

export const WithLoading = BaseComponent => {
  return ({ loading, ...otherProps }) =>
    !loading ? (
      <div>
        <h1>Loading</h1>
      </div>
    ) : (
      BaseComponent(otherProps)
    )
}

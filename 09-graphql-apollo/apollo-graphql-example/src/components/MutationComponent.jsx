import React from 'react'

const TOGGLE_HIDDEN = gql`
  mutation ToggleHiddenValue($cartHidden: Boolean!) {
    toggleHiddenValue(cartHidden: $cartHidden) {
        cartHidden
    }
  }
`;

const GET_HIDDEN = gql`
  {
      cartHidden @client
  }
`;


export const MutationComponent = () => {
    return (
        <div>

        </div>
    )
}

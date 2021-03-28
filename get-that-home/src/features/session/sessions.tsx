import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(params: { email: $email, password: $password }) {
      user {
        token
        id
        name
        email
        phone
        role
      }
    }
  }
`

function Login() {
  let input: any
  const [login, { data }] = useMutation(LOGIN)
  if (data) {
    console.log(data.login.user.token)
    localStorage.setItem('token', data.login.user.token as string)
  }

  return (
    <div>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()
          const target = e.target as typeof e.target & {
            email: { value: string }
            password: { value: string }
          }
          const email = target.email.value
          const password = target.password.value
          login({ variables: { email, password } })
        }}
      >
        <div>
          <label htmlFor="email">
            Email:
            <input id="email" type="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input id="password" type="password" name="password" />
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  )
}

export { Login }

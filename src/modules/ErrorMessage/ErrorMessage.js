import React from 'react'
import style from './error-message.module.css'

const ErrorMessage = ({ statusCode }) => {
  return (
    <p className={style.text}>
      {statusCode == 404 ? (
        <span>You have not published any news yet...</span>
      ) : (
        <span>
          An error occurred while connecting to the server.Check URLS in
          <code>src/lib/URLS.js</code>
        </span>
      )}
    </p>
  )
}

export default ErrorMessage

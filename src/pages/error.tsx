import { useRouteError, Link, UNSAFE_ErrorResponseImpl } from "react-router-dom";
import styles from "@styles/pages/error.module.scss"

export default function Error() {

  const error = useRouteError() as UNSAFE_ErrorResponseImpl
  console.error(error)

  return (
    <div id="error-page" className={ styles["error-page"] }>
      <h1>Oops!</h1>
      <h3>Code { error.status }</h3>
      <h5>Sorry, an unexpected error has occurred.</h5>
      <p>
        <i>{ error.statusText }</i>
      </p>
      <p>
        <i>{ error.data }</i>
      </p>
      <Link to='/'>Return to home</Link>
    </div>
  )
}
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.error('ErrorBoundary caught an error', error, info)
  }

  componentDidUpdate () {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 3000)
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1>We got error.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary

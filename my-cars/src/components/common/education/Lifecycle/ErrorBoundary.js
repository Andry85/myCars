import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновите состояние так, чтобы следующий рендер показал запасной интерфейс.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // Пример "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App

        console.log(error);
        console.log(info);
    }
  
    render() {
      if (this.state.hasError) {
        // Здесь можно рендерить запасной интерфейс
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children;
    }
  }
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import ShowList from "./components/showList";
import Blogs from "./components/blogs";
// Functional Component, looks like exactly JS functions

// JS : Imperative Approach
// const para = document.createElement('p');
// para.textContent = "Introduction to JS";
// document.getElementById('root').append(para);

// React: Declarative Approach



function App() {
  return (
      <>
          <Header/>
          <Blogs/>
          {/*<ShowList/>*/}
          <Footer/>
      </>
);
}

export default App;

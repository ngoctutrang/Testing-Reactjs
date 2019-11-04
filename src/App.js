import React from 'react';
import Header from './component/header';
import './App.scss';
import Headline from './component/headline';
import ShareButton  from './component/button';
import {fetchPosts} from './actions';
import { connect } from "react-redux";
import ListItem from './component/listItem';
const temArr=[{
  fName: 'Do',
  lName: 'Ngoc Tu',
  email: 'dongoctu@example.com',
  age: 50,
  online: true

}];

const  App=({posts,fetchPosts})=> {

  const configButton ={
    textButton: 'Get Posts',
    commitEvent: fetchPosts
  }
 console.log(posts);
  return (
    <div className="App">
     
        <Header />
        <section className="main">
          <Headline header='Posts' desc="Click here to render posts" temArr={temArr}/>
          <ShareButton {...configButton} />
          {posts.length >0 && 
            <div>
              {
                posts.map((post, index)=>{
                  return (<ListItem title={post.title} desc={post.body} key={index} />);
                })
              }
            </div>
          }
        </section>
      
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {
    posts: state.posts
  }
};
const mapDispatchToProps =  {
 
    fetchPosts 

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

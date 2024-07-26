import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, Link} from "react-router-dom";


function App(props) {


    return (


        <div className='app-wraper'>
            <Header/>
            <Navbar/>

            <div className='app-wraper-content'>
                <Routes>
                    {/*<Route path='/dialogs/*' element={<Dialogs state={props.state.profilePage.dialogsData} messagesData={props.state.dialogPage.messagesData}/>}/>*/}
                <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogPage}/>}/>
                <Route path='/profile/*' element={<Profile state={props.state.profilePage} />}/>
                </Routes>
            </div>
        </div>
            )
}


export default App;

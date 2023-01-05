import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const Dashboard = () => {
    return <div>hello world</div>
}

export default function App() {
    return (
        <div className="app">
            <Sidebar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    )
}

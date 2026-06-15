import { ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon, ChartBarIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import baseUrl from '../../utils/baseurl';

const Aside = () => {
    const location = useLocation();
    const showAdd = () => {
        document.getElementById('add_modal').showModal();
    }
    const logoutUser = async () => {
        if (window.confirm("Are you sure to logout?")) {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
                credentials: 'include' //!important
            };
            const response = await fetch(`${baseUrl}/logout`, requestOptions);
            const result = await response.json();
            if (result.status) {
                console.log("Logout Success");
                window.location.href = "/";
            } else {
                alert("Something went wrong! try again");
            }
        }

    }
    return (
        <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
            <div className="text-xl pb-2 border-b-2 border-primary">
                Batch Management
            </div>
            {/* show add product btn only on home page: */}
            {location.pathname === "/dashboard" && <li className='mt-2'><button onClick={showAdd}><PlusCircleIcon className='h-6 w-6' />Add New Batch</button></li>}
            <li className='mb-4 mt-2'><Link to={"/dashboard"}><ArchiveBoxIcon className='h-6 w-6' />Production Batches</Link></li>

            <div className="text-xl pb-2 border-b-2 border-primary">
                Dispatch Management
            </div>
            <li className='mt-2'><Link to={"/newSales"}><PlusCircleIcon className='h-6 w-6' />New Dispatch</Link></li>
            <li className='mb-4 mt-2'><Link to={"/viewSales"}><ChartBarIcon className='h-6 w-6' />Dispatch Records</Link></li>

            <div className="text-xl pb-2 border-b-2 border-primary">
                Account Settings
            </div>
            <li className='mt-2'><Link to={"/profile"}><UserCircleIcon className='h-6 w-6' />Profile</Link></li>
            <li className='mb-4 mt-2'><button onClick={logoutUser}><ArrowLeftEndOnRectangleIcon className='h-6 w-6' />Logout</button></li>

        </ul>
    )
}

export default Aside
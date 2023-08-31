import React, { useState } from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllNews = () => {
    const loaddedNews = useLoaderData();
    const [news, setNews] = useState(loaddedNews);
    // console.log(news);

    const handleDelete = (id) => {
        console.log(id, 'delete');
        Swal.fire({
            title: 'Are you sure This News?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://dbnew24-server.vercel.app/news/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your News has been deleted.',
                                'success'
                            )
                            const remaining = news.filter(n => n._id !== id)
                            setNews(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='my-4'>
            <h3 className='text-center text-dark'>All News {news.length}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">News Image</th>
                        <th scope="col">News Title</th>
                        <th scope="col">Wiew</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        news.map((n, index) =>
                            <tr key={n._id}>
                                <th scope="row">{index + 1}</th>
                                <td><img style={{ height: '40px' }} src={n.photo && n.photo} alt="" /></td>
                                <td>{n.title && n.title.substring(0, 20)}...</td>
                                <td><Link to={`/news/${n._id}`}>Details</Link></td>
                                <td><button className="btn btn-outline-primary"><Link to={`/admin/update-news/${n._id}`}><FaEdit /></Link></button></td>
                                <td><button onClick={() => handleDelete(n._id)} className="btn btn-outline-danger"><FaWindowClose /></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllNews;
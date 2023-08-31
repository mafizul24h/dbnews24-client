import React from 'react';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddNews = () => {

    const handleAddNews = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const reporter = form.reporter.value;
        const publish_date = form.publish_date.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const news = { title, category, reporter, publish_date, photo, details };
        // console.log(news);
        fetch('https://dbnew24-server.vercel.app/news', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(news)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'News Add!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
        event.target.reset();
    }

    return (
        <Container>
            <div className='my-2 my-md-4 bg-light p-2 p-md-4 rounded'>
                <h2 className='text-center mb-3'>Add News</h2>
                <form onSubmit={handleAddNews}>
                    <div className='d-flex mb-md-3 gap-3'>
                        <div className="form-group w-100">
                            <label htmlFor="NewsTitle">News Title<span className='text-danger'>*</span></label>
                            <input className='form-control' type="text" name="title" id="title" placeholder='News Title*' required />
                        </div>
                        <div className="w-100">
                            <label htmlFor="Category">News Category<span className='text-danger'>*</span></label>
                            <select className='form-select' name="category" id="category">
                                <option>Select News Category</option>
                                <option value="1">রাজনীতি</option>
                                <option value="2">বিশ্ব</option>
                                <option value="3">বাণিজ্য</option>
                                <option value="4">খেলা</option>
                                <option value="5">বিনোদন</option>
                                <option value="6">শিল্প-সাহিত্য</option>
                                <option value="7">সম্পাদকীয়</option>
                                <option value="8">লাইফ স্টাইল</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex mb-md-3 gap-3'>
                        <div className="form-group w-100">
                            <label htmlFor="Reporter">Reporter Name</label>
                            <input className='form-control' type="text" name="reporter" id="reporter" placeholder='Reporter Name' />
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="Date">Publish Date<span className='text-danger'>*</span></label>
                            <input className='form-control' type="date" name="publish_date" id="publish_date" placeholder='Publish Date' />
                        </div>
                    </div>
                    <div className="form-group w-100 mb-2">
                        <label htmlFor="Photo">Photo URL</label>
                        <input className='form-control' type="url" name="photo" id="photo" placeholder='Photo URL' required />
                    </div>
                    <div className="form-group mb-md-3 w-100">
                        <label htmlFor="DetailsNews">Details News<span className='text-danger'>*</span></label>
                        <textarea className='form-control' name="details" id="details" cols="" rows="5" placeholder='Details News*' required></textarea>
                    </div>
                    <input className='btn btn-success w-100' type="submit" value="Add News" />
                </form>
            </div>
        </Container>
    );
};

export default AddNews;
import ReachandleUpdateNewst from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateNews = () => {
    const loadedNews = useLoaderData();
    // console.log(loadedNews);

    
    const handleUpdateNews = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const reporter = form.reporter.value;
        const publish_date = form.publish_date.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const updateNews = { title, category, reporter, publish_date, photo, details };
        console.log(updateNews);
        fetch(`https://dbnew24-server.vercel.app/news/${loadedNews._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateNews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount) {
                    Swal.fire(
                        'News Update Successfully!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
        event.target.reset();
    }

    return (
        <div className='my-4'>
            <h2 className='text-center text-dark mb-3'>Update News {loadedNews?.title && loadedNews.title}</h2>
            <form onSubmit={handleUpdateNews}>
                    <div className='d-flex mb-md-3 gap-3'>
                        <div className="form-group w-100">
                            <label htmlFor="NewsTitle">News Title<span className='text-danger'>*</span></label>
                            <input className='form-control' type="text" name="title" id="title" defaultValue={loadedNews?.title && loadedNews.title} placeholder='News Title*' required />
                        </div>
                        <div className="w-100">
                            <label htmlFor="Category">News Category<span className='text-danger'>*</span></label>
                            <select className='form-select' name="category"  id="category">
                                <option value={loadedNews?.category && loadedNews.category}>Select Category</option>
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
                            <input className='form-control' type="text" name="reporter" id="reporter" defaultValue={loadedNews?.reporter && loadedNews.reporter} placeholder='Reporter Name' />
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="Date">Publish Date<span className='text-danger'>*</span></label>
                            <input className='form-control' type="date" name="publish_date" id="publish_date" defaultValue={loadedNews?.publish_date && loadedNews.publish_date} placeholder='Publish Date' />
                        </div>
                    </div>
                    <div className="form-group w-100 mb-2">
                        <label htmlFor="Photo">Photo URL</label>
                        <input className='form-control' type="url" name="photo" id="photo" defaultValue={loadedNews?.photo && loadedNews.photo} placeholder='Photo URL' required />
                    </div>
                    <div className="form-group mb-md-3 w-100">
                        <label htmlFor="DetailsNews">Details News<span className='text-danger'>*</span></label>
                        <textarea className='form-control' name="details" id="details" cols="" rows="5" placeholder='Details News*' defaultValue={loadedNews?.details && loadedNews.details} required></textarea>
                    </div>
                    <input className='btn btn-success w-100' type="submit" value="Update News" />
                </form>
        </div>
    );
};

export default UpdateNews;
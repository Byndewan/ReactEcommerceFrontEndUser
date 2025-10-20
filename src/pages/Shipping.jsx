import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Shipping = () => {
const [res, setRes] = useState(false)
const [state, setState] = useState({
name: '',
address: '',
phone: '',
post: '',
province: '',
city: '',
area: ''
})

const inputHandle = (e) => {
setState({
...state,
[e.target.name]: e.target.value
})
}

const save = (e) => {
e.preventDefault()
const {name,address,phone,post,province,city,area} = state
if (name && address && phone && post && province && city && area) {
setRes(true)
}
}

return (
<div>
<Header />

<section
style={{ backgroundImage: "url('/images/banner/shop.png')" }}
className="h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
<div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
<div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
<div className='flex flex-col justify-center items-center gap-1 h-full w-full text-white'>
<h2 className='text-3xl font-bold'>Shipping Pages</h2>
<div className='flex justify-center items-center gap-2 text-2xl w-full'>
<Link to='/'>Home</Link>
<span className='pt-1'><IoIosArrowForward /></span>
<span>Shipping</span>
</div>
</div>
</div>
</div>
</section>

<section className='bg-[#eeeeee]'>
<div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16'>
<div className='w-full flex flex-wrap'>
<div className='w-[67%] md-lg:w-full'>
<div className='flex flex-col gap-3'>
<div className='bg-white p-6 shadow-sm rounded-md'>
<h2 className='text-slate-600 font-bold pb-3'>Shipping Information</h2>

{
!res
&&
<>
<form onSubmit={save}>
<div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="name">Name</label>
<input onChange={inputHandle} value={state.name} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Name Hir' name='name' id='name' />
</div>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="address">Address</label>
<input onChange={inputHandle} value={state.address} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Address Hir' name='address' id='address' />
</div>
</div>
<div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="phone">Phone</label>
<input onChange={inputHandle} value={state.phone} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Phone Hir' name='phone' id='phone' />
</div>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="post">Post</label>
<input onChange={inputHandle} value={state.post} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Post Hir' name='post' id='post' />
</div>
</div>
<div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="province">Province</label>
<input onChange={inputHandle} value={state.province} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Province Hir' name='province' id='province' />
</div>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="city">City</label>
<input onChange={inputHandle} value={state.city} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip City Hir' name='city' id='city' />
</div>
</div>
<div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
<div className='flex flex-col gap-1 mb-2 w-full'>
<label htmlFor="area">Area</label>
<input onChange={inputHandle} value={state.area} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" placeholder='Taip Area Hir' name='area' id='area' />
</div>
<div className='flex flex-col gap-1 mt-7 mb-2 w-full'>
<button className='px-3 py-2 transition-all duration-300 rounded-sm hover:shadow-green-500/50 hover:shadow-md hover:rounded-md bg-green-500 text-white'>Save Changes</button>
</div>
</div>
</form>
</>
}

{
res
&&
<div className='flex flex-col gap-1'>
<h2 className='text-slate-600 font-semibold pb-2'>Deliver To {state.name}</h2>
<p>
<span className='bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1 rounded'>Home</span>
<span>{state.address} {state.province} {state.city} {state.area}</span>
<span onClick={() => setRes(false)} className='text-indigo-500 cursor-pointer ml-2'>Change</span>
</p>
<p className='text-slate-600 text-sm'>Email To Abyandev@gmail.com</p>
</div>
}

</div>

{
[1,2].map((p,i) => 
<div className='flex flex-col bg-white p-4 gap-2'>
<div className='flex justify-start items-center'>
<h2 className='text-md text-gray-600 font-bold'>LC Shop</h2>
</div>
{[1,2].map((p,i) => <div className='w-full flex flex-wrap'>
<div className='flex sm:w-full gap-2 w-7/12'>
<div className='flex gap-2 justify-start items-center'>
<img className='w-[80px] h-[80px]' src={`http://localhost:3000/images/products/${i+1}.webp`} alt="" />
<div className='pr-4 text-gray-600'>
<h2 className='text-md font-semibold'>Product Name Hir</h2>
<span className='text-sm'>Brand: Jarak Antara Kita</span>
</div>
</div>
</div>
<div className='flex justify-between w-5/12 sm:w-ful sm:mt-3'>
<div className='pl-4 sm:pl-0'>
<h2 className='text-lg text-orange-500'>$234</h2>
<p className='line-through'>$9999</p>
<p className='text-sm'>-101%</p>
</div>
<div className='flex gap-2 flex-col'>
<div className='flex bg-gray-200 h-[30px] justify-center items-center text-xl'>
<div className='px-3 cursor-pointer'>-</div>
<div className='px-3'>2</div>
<div className='px-3 cursor-pointer'>+</div>
</div>
<button className='px-5 py-[3px] bg-red-500 text-white'>Delete</button>
</div>
</div>
</div>
)}
</div>
)
}

</div>
</div>

<div className='w-[33%] md-lg:w-full'>
<div className='pl-3 md-lg:pl-0 md-lg:mt-5'>

<div className='bg-white p-3 text-gray-600 flex flex-col gap-3'>
<h2 className='text-xl font-bold'>Order Summary</h2>
<div className='flex justify-between items-center'>
<span>Items Total (5)</span>
<span>$9999</span>
</div>
<div className='flex justify-between items-center'>
<span>Delivery Fee</span>
<span>$14999</span>
</div>
<div className='flex justify-between items-center'>
<span>Total Payment</span>
<span>$91347</span>
</div>

<div className='flex justify-between items-center'>
<span>Total</span>
<span className='text-lg text-[#059473]'>$-29102934</span>
</div>
<button disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm hover:shadow-red-500/50 hover:shadow-lg ${res ? 'bg-red-500' : 'bg-red-300'} text-sm text-white uppercase font-bold`}>Place Order</button>
</div>
</div>
</div>

</div>
</div>
</section>

<Footer />
</div>
);
};

export default Shipping;

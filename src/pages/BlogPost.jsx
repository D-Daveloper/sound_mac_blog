import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { home_post } from "../data/index";
import logo from "../assets/icons/logo.svg";
import blog_img1 from "../assets/images/blog_img1.png"
import { Heart, Share2 } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();  // Extract the article ID from the URL
    const [article, setArticle] = useState(null);
    const arti = 'Lorem ipsum dolor sit amet consectetur. Sed eget quis sociis aliquam rutrum laoreet platea tempus tristique. Ut praesent viverra ut risus nam sed blandit risus massa. Accumsan porttitor bibendum lorem et turpis. At dolor aliquam senectus erat morbi. Nunc volutpat egestas diam aliquam mus iaculis. Id ipsum nibh consequat sodales sed amet. Sed egestas fringilla sit nibh elementum dictum ornare vulputate. Vitae semper platea a et dictum ultricies pellentesque netus. Quam erat senectus eu orci eget sed mauris viverra arcu. Magnis aliquet quam sociis nulla. Quam morbi quis scelerisque nisl. Aliquam nam condimentum hendrerit tempus. Aliquet quis non orci eu accumsan elementum molestie orci ante. '
    const arti1 = 'Lorem ipsum dolor sit amet consectetur. Sed eget quis sociis aliquam rutrum laoreet platea tempus tristique. Ut praesent viverra ut risus nam sed blandit risus massa. Accumsan porttitor bibendum lorem et turpis. At dolor aliquam senectus erat morbi. Nunc volutpat egestas diam aliquam mus iaculis. Id ipsum nibh consequat sodales sed amet. Sed egestas fringilla sit nibh elementum dictum ornare vulputate. Vitae semper platea a et dictum ultricies pellentesque netus. Quam erat senectus eu orci eget sed mauris viverra arcu. Magnis aliquet'
    
  return (
    <div>
      <section className='bg-homebg py-10'>
        <div className='w-[70%] mx-auto max-lg:w-[90%]'>
          <p className='text-text '>
            Home {">"} Posts {">"} {}
          </p>
          <article >
            <h1 className=' font-bold leading-normal text-text md:text-[2.8vw] text-2xl'>
              Top 10 Emerging Artists You Need to Hear
            </h1>
            <div className='flex gap-3 py-6 '>
              <img src={logo} alt="" className='bg-black rounded-full' />
              <div>
                  <h3>
                    Soundmac
                  </h3>
                  <p>
                    Published {new Date().toLocaleDateString()}
                  </p>
              </div>
            </div>
            <div>
              <div className=''>
                <img src={blog_img1} alt="" className='object-none rounded-[20px] h-[530px] w-full object-top max-md:object-cover max-md:h-full' />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-justify my-10'>
                <p>
                  {arti1}
                </p>
                <p >
                  {arti}
                </p>
              </div>
              <div className='grid gap-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <img src={blog_img1} alt="" className='rounded-[20px] ' />
                  <p>{arti}</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <img src={blog_img1} alt="" className='rounded-[20px] order-2 max-lg:order-1' />
                  <p className='max-lg:order-2 order-1'>{arti}</p>
                </div>

              </div>
            </div>
          </article>
        </div>
        <hr className="border-1 border-gray-800 my-3" />
        <div className='p-6'>
          <h1 className=' font-bold leading-normal text-text md:text-[2.8vw] text-2xl'>
            view other related posts
          </h1>
          <div className='flex flex-wrap gap-3 justify-between'>
          {home_post.slice(0,3).map((item, index) => (
                <article key={index} className="flex justify-center rounded-2xl bg-white p-3 hover:shadow-lg">
                  <div className="flex flex-col justify-between  hover:cursor-pointer w-[400px] max-lg:w-full">
                    <div>
                      <img src={item.imgURL} alt="" className="object-cover w-full" />
                    </div>
                    <h2 className="font-semibold leading-normal text-text">
                      {item.Text}
                    </h2>
                    <p className="text-sm">{item.time}</p>
                    <div className="flex justify-between text-base font-semibold">
                      <p className="text-icon flex gap-3">
                        <button className="fill-none">
                        <Heart stroke="#10414A" className={"hover:scale-110 focus:scale-110" }/> 
                        </button>
                        {item.likes}
                      </p>
                      <p className="text-icon flex gap-3">
                        <button>
                          <Share2 stroke="#10414A" className={"hover:scale-110 focus:scale-110"} />
                          </button>
                        {item.shares}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default BlogPost;

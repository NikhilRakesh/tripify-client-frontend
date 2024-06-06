import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const BlogCard = ({ index, data }) => {

    // const {  header, description, image, id,introduction } = data;

    const navigate = useNavigate()

    // const formattedDate = format(new Date(date), 'MMMM d, yyyy');

    function truncateText(text, maxLength) {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }


    return data?.length === 0 ? null : (
        <div className={`flex justify-center  items-center w-full h-full gap-[168px] `}>
            {index}
            <div
                className="flex flex-col justify-start items-center flex-grow-0 shadow-md flex-shrink-0 relative overflow-hidden gap-8 pb-8 border rounded-3xl bg-white"
                style={{ boxShadow: "0px 12px 24px 0 rgba(0,0,0,0.07)" }}>
                <img src={data?.blogs[0].image} className="flex-grow-0 flex-shrink-0 w-[352px] h-60 object-cover" />
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 ">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px] relative" preserveAspectRatio="none">
                                <path d="M7.33337 1.8335V4.5835" stroke="#292D32" strokeWidth="1.375" strokeMiterlimit={10}
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.6666 1.8335V4.5835" stroke="#292D32" strokeWidth="1.375" strokeMiterlimit={10}
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.20837 8.33252H18.7917" stroke="#292D32" strokeWidth="1.375" strokeMiterlimit={10}
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M19.25 7.79183V15.5835C19.25 18.3335 17.875 20.1668 14.6667 20.1668H7.33333C4.125 20.1668 2.75 18.3335 2.75 15.5835V7.79183C2.75 5.04183 4.125 3.2085 7.33333 3.2085H14.6667C17.875 3.2085 19.25 5.04183 19.25 7.79183Z"
                                    stroke="#292D32" strokeWidth="1.375" strokeMiterlimit={10} strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M14.3868 12.5584H14.395" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M14.3868 15.3084H14.395" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M10.9959 12.5584H11.0041" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M10.9959 15.3084H11.0041" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M7.60308 12.5584H7.61131" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M7.60308 15.3084H7.61131" stroke="#292D32" strokeWidth="1.83333" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                            {/* <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#191919]">
                                {formattedDate}
                            </p> */}
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 w-72 text-2xl font-bold text-left truncate text-[#191919]">
                            {data?.blogs[0].header}
                        </p>
                    </div>
                    <div >
                        <p className="flex-grow-0 flex-shrink-0 w-72 text-base text-left text-[#191919]">
                            {truncateText(data?.blogs[0].introduction, 100)}
                        </p>
                    </div>
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                        <div
                            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 p-1 rounded-[60px] border border-[#008395]">
                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative" preserveAspectRatio="none">
                                <path d="M6.6825 14.9401L11.5725 10.0501C12.15 9.47256 12.15 8.52756 11.5725 7.95006L6.6825 3.06006"
                                    stroke="#008395" strokeWidth="1.125" strokeMiterlimit={10} strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#008395] cursor-pointer" onClick={() => navigate(`/blogs/${data._id}`)}>
                            See more
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

import React from 'react'
import { BsCodeSlash, BsFillPipFill, BsSearch } from "react-icons/bs";



function WhatIdo() {
  return (
    <div className='container mt-5'>
        <div>
            <h2 className='text-center'>What I do</h2>
        </div>
        <section className='p-2'>
            <div className="container h-25">
                <div className="row text-center g-4">
                    <div className="h-100 col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                <BsCodeSlash className='text-primary'/>
                                </div>
                                <h5 className="card-title">
                                    Web Development
                                </h5>
                                <h6 className="card-text">
                                With modern web practices.
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="h-100 col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                <BsFillPipFill  className='text-primary'/>
                                </div>
                                <h5 className="card-title">
                                    Responsive Design
                                </h5>
                                <h6 className="card-text fz-1">
                                Using mixins and media queries.
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="h-100 col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                <BsSearch  className='text-primary'/>
                                </div>
                                <h5 className="card-title">
                                    Unit Testing
                                </h5>
                                <h6 className="card-text">
                                testcases using jest and vitest.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default WhatIdo
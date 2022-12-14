import React, { useEffect } from 'react';
// import "./Hospitallist.css"
const Hospital = () => {
    const getUsers=async()=>{
        const response =await fetch ('https://api.github.com/users');
        console.log(response); 
    }
    useEffect(()=>{
        getUsers();
    }); 
    return (
        <>
            <h2>List of Hospital </h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    <div className="col-10 col-md-5 mt-5">
                        <div class="card p-2">
                                 <div class="d-flex align-items-center">
                                    <div class="image"><img src=" " class="rounded" width="155"/></div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb-0 mt-0 textLeft">Kalpana Hospital</h4><span className="textLeft">Multi-Speciality Hospital</span>
                                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        
                                            <div class="d-flex flex-column"><span class="articles">40+ doctor available</span> </div>
                                            <div class="d-flex flex-column"><span class="followers">Ahmedabad</span> </div>
                                            <div class="d-flex flex-column"><span class="rating">Establish 1977</span> </div>
                                    
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>   
                    <div className="col-10 col-md-5 mt-5">
                        <div class="card p-2">
                                 <div class="d-flex align-items-center">
                                    <div class="image"><img src=" " class="rounded" width="155"/></div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb-0 mt-0 textLeft">Apollo Hospital</h4><span className="textLeft">Multi-Speciality Hospital</span>
                                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        
                                            <div class="d-flex flex-column"><span class="articles">50+ doctor available</span> </div>
                                            <div class="d-flex flex-column"><span class="followers">Hyderabad</span> </div>
                                            <div class="d-flex flex-column"><span class="rating">Establish 1980</span> </div>
                                    
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>     
                    <div className="col-10 col-md-5 mt-5">
                        <div class="card p-2">
                                 <div class="d-flex align-items-center">
                                    <div class="image"><img src=" " class="rounded" width="155"/></div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb-0 mt-0 textLeft">Kalyan hospital</h4><span className="textLeft">Multi-Speciality Hospital</span>
                                        <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        
                                            <div class="d-flex flex-column"><span class="articles">150+ doctor available</span> </div>
                                            <div class="d-flex flex-column"><span class="followers">Bengaluru</span> </div>
                                            <div class="d-flex flex-column"><span class="rating">24X7</span> </div>
                                   
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>          

                </div>

            </div>
            
        </>
    );
};
export default Hospital;
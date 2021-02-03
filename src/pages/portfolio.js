import React, { useState, useEffect } from 'react';

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [category, setCatagory] = useState("all");
    
    const getProjects = ()=>{
        fetch(
            'json/projects.json',
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                }
            }
        ).then(
            function(response){
                return response.json();
            }
        ).then(function(jsonData){
            console.log(jsonData);
            setProjects(jsonData);
        });
    };
    
    const getByCategory = (e) => {
        setCatagory(e.target.id.replaceAll("menu_", ""));
    };

    useEffect(()=>{
        getProjects();
    },[]);

    return (
        <div id="portfolio" class="">
            <section class="p-3">
                <h4 class="font-weight-bold text-primary-default display-inline">
                    Portfolio
                </h4>
                <div class="nav-tab pt-2 px-3 pb-4 mt-2 crv-8 bg-light">
                    <ul class="list-unstyled mb-4">
                        <li class="float-left mr-3 btn py-2" id="menu_all" onClick={getByCategory}>All</li>
                        <li class="float-left mr-3 btn py-2" id="menu_web" onClick={getByCategory}>Websites</li>
                        <li class="float-left mr-3 btn py-2" id="menu_mobile" onClick={getByCategory}>Mobile Apps</li>
                        <li class="float-left mr-3 btn py-2" id="menu_others" onClick={getByCategory}>Others</li>
                    </ul>
                </div>

                <div class="p-3">
                    <div class="row">
                        {
                            projects.map(project =>
                            (
                                category === "all" || category === project.tag ?
                                    <div class="col-md-4 mt-3 animated bounceIn" key={project.key}>
                                        <div class="card p-0 h-100">
                                            <div class="card-header p-0">
                                                <img src={project.screenshot} alt="" class="img-fluid" />
                                            </div>
                                            <div class="card-body p-2">
                                                <p class="font-weight-bold mb-0">
                                                    {project.project} <small>( {project.date} )</small>
                                                    {
                                                        project.status === "unavailable" ?
                                                            <span className="ion-android-lock ml-2"></span>
                                                            : <span className="ion-social-github ml-2"></span>
                                                    }
                                                </p>
                                                <span>{project.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                    : <div key={project.key}></div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

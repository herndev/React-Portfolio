import React, { useState, useEffect } from 'react';

function Portfolio() {
    const numberOfProjectsToDisplay = 6;
    const [projects, setProjects] = useState({});
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [itemCount, setItemCount] = useState(numberOfProjectsToDisplay);

    // Get projects object json from the projects
    // json file inside public  directory
    const getProjects = () => {
        fetch(
            'json/projects.json',
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                }
            }
        ).then(
            function (response) {
                return response.json();
            }
        ).then(function (jsonData) {
            setProjects(jsonData);
            // Join all projects and set it to visible projects by default
            setVisibleProjects([].concat(jsonData.others).concat(jsonData.web).concat(jsonData.mobile));
        });
    };


    // Set visible projects from selected category and
    // join all projects if select all from the tab menu
    const getByCategory = (e) => {
        // Get the id of the selected category and remove the menu_ so
        // it will reburn just (mobile, web, others, all)
        const selectedCategory = e.target.id.replaceAll("menu_", "");
        setItemCount(numberOfProjectsToDisplay); // Set numbers of items to be displayed by default 

        if (selectedCategory !== "all") {
            // Set visible projects to the selected category
            setVisibleProjects(projects[selectedCategory]);
        } else {
            // Join all projects to visible projects
            setVisibleProjects([].concat(projects.others).concat(projects.web).concat(projects.mobile));
        }
    };

    // Increase number of items to be displayed
    const loadMoreProjects = (e) => {
        setItemCount(itemCount + numberOfProjectsToDisplay);
    };

    // On page load
    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div id="portfolio" class="">
            <section class="p-3">
                <h4 class="font-weight-bold text-primary-default display-inline">
                    Portfolio
                </h4>
                <div class="nav-tab pt-2 px-3 pb-4 mt-2 crv-8 bg-light">
                    <ul class="list-unstyled mb-4">
                        <li class="float-left mr-3 btn py-2 active" id="menu_all" onClick={getByCategory}>All</li>
                        <li class="float-left mr-3 btn py-2" id="menu_web" onClick={getByCategory}>Websites</li>
                        <li class="float-left mr-3 btn py-2" id="menu_mobile" onClick={getByCategory}>Mobile Apps</li>
                        <li class="float-left mr-3 btn py-2" id="menu_others" onClick={getByCategory}>Others</li>
                    </ul>
                </div>

                <div class="p-3">
                    <div class="row">
                        {
                            // Display all the visible projects and limit
                            // the number of projects by item count
                            visibleProjects.slice(0, itemCount).map(project =>
                            (
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
                            ))
                        }
                    </div>


                    {
                        // If itemCount is less than number of visible projects
                        // you can increase the number of projects to be displayed
                        itemCount < visibleProjects.length ?
                            <div className="row">
                                <div className="col-md display-centerx">
                                    <button className="btn btn-info my-5 px-4" onClick={loadMoreProjects}>Load more</button>
                                </div>
                            </div>
                            : <div className=""></div>
                    }
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

import React, { useState } from 'react';

function Portfolio() {
    const myprojects = [
        {
            key: 0,
            project: "Sample",
            screenshot: "img/freeimg_89251639freejpg850.jpg",
            date: "2018 - 2020",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, nisi earum. Neque natus.",
            tag: "web",
        },
        {
            key: 1,
            project: "Sample Project 2",
            screenshot: "img/freeimg_89251639freejpg850.jpg",
            date: "2019",
            description: "Amet consectetur adipisicing elit. Sint, lorem ipsum dolor sit, nisi earum. Neque natus.",
            tag: "mobile",
        },
        {
            key: 2,
            project: "Sample Project 3",
            screenshot: "img/freeimg_89251639freejpg850.jpg",
            date: "2019",
            description: "Amet consectetur adipisicing elit. Sint, lorem ipsum dolor sit, nisi earum. Neque natus.",
            tag: "mobile",
        }
    ];
    const [projects, setProjects] = useState([]);
    const [category, setCatagory] = useState("all");


    function addProject(project) {
        console.log(projects);
        // console.log(project.tag === projects[0].tag);
        if (projects.length !== 0 && projects[0].tag === project.tag) {
            setProjects([
                ...projects,
                project
            ]);
        } else {
            setProjects([
                project
            ]);
        }
    }

    const getProjects = (e) => {
        if (category !== e.target.id) {

            if (e.target.id === "all") {
                setProjects(myprojects);
            } else {
                myprojects.forEach(project => {
                    if (project.tag === e.target.id) {
                        addProject(project);
                    }
                });

            }

            setCatagory(e.target.id);
        }

    };

    return (
        <div id="portfolio" class="">
            <section class="p-3">
                <h4 class="font-weight-bold text-primary-default display-inline">
                    Portfolio
                </h4>
                <div class="nav-tab pt-2 pb-3 px-3 mt-2 crv-8 bg-light">
                    <ul class="list-unstyled">
                        <li class="float-left mr-3" id="all" onClick={getProjects}>All</li>
                        <li class="float-left mr-3" id="web" onClick={getProjects}>Websites</li>
                        <li class="float-left mr-3" id="mobile" onClick={getProjects}>Mobile App</li>
                        <li class="float-left mr-3" id="others" onClick={getProjects}>Others</li>
                    </ul>
                </div>

                <div class="p-3">
                    <div class="row">
                        {
                            projects.length !== 0 ?
                                projects.map(project => (
                                    (category === project.tag || category === "all")?
                                    <div class="col-md-4 mt-3" key={project.key}>
                                        <div class="card p-0">
                                            <div class="card-header p-0">
                                                <img src={project.screenshot} alt="" class="img-fluid" />
                                            </div>
                                            <div class="card-body p-2">
                                                <p class="font-weight-bold mb-0">
                                                    {project.project} <small>( {project.date} )</small>
                                                </p>
                                                <span>{project.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="" key={project.key}></div>

                                )) :
                                myprojects.map(project => (
                                    <div class="col-md-4 mt-3" key={project.key}>
                                        <div class="card p-0">
                                            <div class="card-header p-0">
                                                <img src={project.screenshot} alt="" class="img-fluid" />
                                            </div>
                                            <div class="card-body p-2">
                                                <p class="font-weight-bold mb-0">
                                                    {project.project} <small>( {project.date} )</small>
                                                </p>
                                                <span>{project.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

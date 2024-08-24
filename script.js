const projects = {
    "CSE": {
        "2024": [
            { name: "Project 1", link: "https://drive.google.com/file/d/10UQGO8PjHi5e_aVTv28HhOhA8VQAjby_/view?usp=drive_link" },
            { name: "Project 2", link: "https://drive.google.com/file/d/EXAMPLE2/view" }
        ],
        "2023": [
            { name: "Project 3", link: "https://drive.google.com/file/d/EXAMPLE3/view" }
        ]
    },
    "ECE": {
        "2024": [
            { name: "Project 4", link: "https://drive.google.com/file/d/EXAMPLE4/view" }
        ]
    },
    "ME": {
        "2022": [
            { name: "Project 5", link: "https://drive.google.com/file/d/EXAMPLE5/view" }
        ]
    }
};

const departmentSelect = document.getElementById('departmentSelect');
const yearSelect = document.getElementById('yearSelect');
const projectList = document.getElementById('projectList');

departmentSelect.addEventListener('change', displayProjects);
yearSelect.addEventListener('change', displayProjects);

function displayProjects() {
    const department = departmentSelect.value;
    const year = yearSelect.value;

    projectList.innerHTML = '';

    if (department && year && projects[department] && projects[department][year]) {
        projects[department][year].forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `<a href="${project.link}" target="_blank">${project.name}</a>`;
            projectList.appendChild(projectItem);
        });
    }
}
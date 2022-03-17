$(document).foundation();

var app = new Vue({
    el: '#app',
    data: {
        projects: [],
    },
    mounted() {
        fetch('https://gh-pinned-repos.egoist.sh/?username=Pnkj124')
            .then(res => res.json())
            .then(res => {
                for (const repo of res) {
                    this.projects.push({
                        project_icon: "./img/github.svg",
                        project_title: repo.repo,
                        project_description: repo.description,
                        url: repo.link,
                        language: repo.language,
                        stars: repo.stars,
                        forks: repo.forks
                    })
                }
            });
    }
})
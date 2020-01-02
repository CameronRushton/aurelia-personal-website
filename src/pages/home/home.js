export class Home {
    
    constructor() {
        this.scrollTop = 0;
        this.showNokia = false;
        this.showSolace = false;
        this.copyText = "Copy";
        this.techDesc = "Click on tech below and I'll tell you why it's listed.";
        this.technologies = [
            {name: "Git", desc: "I've used git version control for years via command line, IntelliJ plugin and desktop app.", isActive: false},
            {name: "GitHub", desc: "GitHub has been my favourite repo manager for years; it looks good and has many great plugins.", isActive: false},
            {name: "Gerrit", desc: "I used gerrit for repo management and code reviews during my time at Nokia.", isActive: false},
            {name: "JIRA", desc: "JIRA + Confluence has always been a necessary combo. Their integration with GitHub is great as well.", isActive: false},
            {name: "MySQL", desc: "It should be no surprise that I've worked with MySQL relational databases before.", isActive: false},
            {name: "AWS", desc: "I had the opportunity to work with AWS, Azure, GCP and Huawei clouds. AWS is the one I know best from CloudFront to RDS.", isActive: false},
            {name: "REST", desc: "I've built and worked with REST endpoints in many projects - it's the standard, after all.", isActive: false},
            {name: "Docker", desc: "All large applications I've worked on were containerized - even my own. Paired with K8S, life is made easy.", isActive: false},
            {name: "Maven", desc: "Maven has been the obvious choice with my own projects and at Solace, though Gradle was used instead at Nokia.", isActive: false},
            {name: "Jenkins", desc: "From starting builds to writing new pipelines, I've done it before with Jenkins.", isActive: false},
            {name: "Spring", desc: "I've used the Spring Java framework to create beans and dependency injection at Solace.", isActive: false}
        ]
        this.showSeeMore = false;
        setTimeout(() => { this.showSeeMore = true; }, 5000);

    }

    selectTech(target) {
        this.technologies.forEach(tech => {tech.isActive = false});
        this.techDesc = target.desc;
        target.isActive = !target.isActive;
    }

    handleScroll(event) {
        // console.log(this.scrollTop)
    }

    makeVisible(event) {
        // console.log(event);
    }

    scrollToId(id) {
        document.getElementById(id).scrollIntoView({ 
            behavior: 'smooth'
        });
    }

    copy(target) {
        this.copyText = "Copied!";
        setTimeout(() => { this.copyText = "Copy"; }, 1000);

        let el = document.createElement('textarea');
        el.value = "cameron.rushton@rogers.com";
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        el.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand('copy');
        document.body.removeChild(el);        
    }

    scrollFn() {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById("top").scrollIntoView({ 
            behavior: 'smooth'
        });
    }

}
module.exports = {
  name: "Tuan Nguyen",
  title: "Fullstack Developer",
  baseUrl: "https://tuannguyen.scrapnode.com/",
  facts: {
    Residence:
      '<a href="#"><i class="fa fa-home fact-icon"></i>Can Tho, Viet Nam</a>',
    LinkedIn:
      '<a href="https://www.linkedin.com/in/tuannguyen1993/"><i class="fab fa-linkedin fact-icon"></i>tuannguyen1993</a>',
    GitHub:
      '<a href="https://github.com/scrapnode"><i class="fab fa-github fact-icon"></i>scrapnode</a>',
    Email:
      '<a href="mailto:tuan.nguyen930708@gmail.com">tuan.nguyen930708@gmail.com</a>',
  },
  skills: [
    ["JS/TS", "+++"],
    ["Golang", "+++"],
    ["CI/CD", "+++"],
    ["SQL", "+++"],
    ["Kubernetes", "++"],
    ["ELK", "++"],
    ["AWS", "++"],
    ["GCP", "+"],
  ],
  summary:
    "As a seasoned backend and devops developer with eight years of experience, I am highly adaptable and able to undertake a range of roles within a team. My primary aspirations are to conceive of and build large-scale systems, steer teams to success, and evolve into a dynamic mentor. I am driven by a passion for continuous learning and self-improvement, and maintain a voracious appetite for acquiring new knowledge on a daily basis.",
  positions: [
    {
      company: "Upmesh",
      link: "https://upmesh.io/sg",
      location: "Singapore",
      title: "Principal Engineer",
      period: "Apr 2019 - Now",
      skills: [".NET", "Golang", "ELK Stack", "Kubenetes", "AWS"],
      contents: `
Becoming a Principal Engineer at a rapidly growing startup has been one of the most enriching experiences I've ever had. During my tenure at Upmesh, I had the privilege of collaborating with exceptional colleagues, engaging in strategic planning, and addressing the evolving requirements essential for meeting our business objectives.

Key Responsibilities:

* Orchestrating and refining operational workflows to seamlessly accommodate constantly changing demands ([Gitflow at a startup](https://blog.scrapnode.com/posts/gitlfow-at-a-startup/))
* Offering guidance to fellow engineers while assisting them in enhancing their design prowess ([The art of Export](https://blog.scrapnode.com/posts/the-art-of-export/), [The art of Import](https://blog.scrapnode.com/posts/the-art-of-import/))
* Delving into performance bottlenecks, embracing the lessons derived from errors, and disseminating these insights to our team members through tech talks and presentations ([When index scan is slower than full table scan](https://blog.scrapnode.com/posts/when-index-scan-is-slower-than-full-table-scan/), [The ID chosen](https://blog.scrapnode.com/posts/the-id-chosen/))

Achievements

* Pioneering the design and implementation of a scalable and highly available webhook system, capable of handling over **2 million events daily** and sustaining **2000 events per second at peak-time** for a minimum of three hours.
* Collaborating with a team to conceptualize and construct an efficient and dependable data pipeline tasked with transforming data sourced from our primary databases (MySQL and PostgreSQL) into ElasticSearch, enabling responsive full-text search capabilities.
* Executing cost optimization strategies within the AWS cloud environment, resulting in a **20% monthly cost reduction**, a contribution that significantly bolstered Upmesh's financial performance.
`,
    },
    {
      company: "2359Media",
      link: "https://www.2359.co/",
      location: "HCM",
      title: "Software Engineer",
      period: "Apr 2019 - Apr 2021",
      skills: ["NodeJS", "ReactJS", "Kubenetes", "AWS", "GCP"],
      contents: `
As a Senior Engineer at the top enterprise Chatbot in Singapore, I was responsible for serving several big clients, including Melco Resorts, Bank of Singapore, and Sacombank in Vietnam.

Key Responsibilities:

* Maintaining the DevOps workflow, which included K8S clusters, CI/CD pipelines, testing setup, and more.
* Designing and implementing MVP projects for pre-sales actions.
* Sharing my knowledge and expertise with team members on coding, testing, and problem-solving.

Achievements:

* Implementing a GitOps workflow that streamlined deployment and release processes by using Git as a source of truth and tools such as FluxCD and GitHub Actions.
* Designing and developing a Voice Bot Platform using GCP, which was deployed to K8S clusters on Azure.
* Ensuring the high quality of our code by implementing thorough testing, with a minimum code coverage requirement of 80%.
* Hosting technical talks on topics such as designing an ETL pipeline for creating reports in Google Data Studio, deploying the ELK stacks for log monitoring, and coding tricks and tips.
`,
    },
    {
      company: "Boomerang.Isentia",
      link: "https://www.isentia.com/",
      location: "HCM",
      title: "Technical Leader",
      period: "Mar 2018 - Apr 2019",
      skills: ["NodeJS", "ReactJS", "ELK Stack", "Kubenetes"],
      contents: `
As a Technical Leader at the #1 media monitoring, intelligence and insights solution provider in Vietnam, I was responsible for developing a platform that enables clients to monitor their customer conversations in real-time.

Key Responsibilities:

* Designing and building a large-scale data crawling system to gather information from various sources including social media platforms like Facebook, Youtube, Instagram, and Vietnamese forums, among others.
* Managing a robust database system using Elasticsearch for storage and Kibana for visualization.
* Automating the software release process using custom scripts.

Achievements:

* Desiging a crawler system that can make over **30 million requests** and collect **15 million documents** per day
* Maintaining two Elasticsearch clusters that stored more than **5 billion documents**, amounting to approximately **15TB of text data**
* Reducing the release time from 4 hours to **30 minutes**
* Achieving a minimum code coverage of **80%**.
`,
    },
  ],
  insights: [
    {
      period: "2016 &ndash; 2018",
      contents: `Managed and maintained an e-commerce platform based on the Yii framework (PHP) at <a href="https://tagrem.com/index.html" target="_blank">Tagrem Corp</a> for <a href="https://www.serta.com/" target="_blank">Mattresses by Serta</a>.
      <br> Completed freelance projects utilizing NodeJS, ExpressJS and MySQL`,
    },
    {
      period: "2015 &ndash; 2016",
      contents: `Developed marketplaces for real estate (<a href="https://nhadatso.com/" target="_blank">NhaDatSo</a>), vehicles (<a href="https://xehoiviet.com/" target="_blank">XeHoiViet</a>) and jobs (<a href="https://www.mangvieclam.com/" target="_blank">MangViecLam</a>)`,
    },
  ],
  others: [
    {
      contents: `Conduct research, design, and implement my personal projects: <a href="https://github.com/scrapnode" target="_blank">ScrapNode</a>`,
    },
  ],
};

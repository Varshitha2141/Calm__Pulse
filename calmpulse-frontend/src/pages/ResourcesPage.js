import React from "react";

const Resources = () => {
  const resources = [
    {
      title: "National Mental Health Helpline (India)",
      description: "24x7 mental health support from licensed professionals.",
      link: "tel:18005990019",
    },
    {
      title: "7 Cups",
      description: "Free emotional support and online therapy with trained listeners.",
      link: "https://www.7cups.com/",
    },
    {
      title: "Headspace",
      description: "Science-backed meditation and mindfulness resources.",
      link: "https://www.headspace.com/",
    },
    {
      title: "NAMI (National Alliance on Mental Illness)",
      description: "Education, support, and awareness for individuals and families.",
      link: "https://www.nami.org/Home",
    },
    {
      title: "Calm Blog",
      description: "Articles on stress, anxiety, sleep, and mindfulness.",
      link: "https://www.calm.com/blog",
    },
  ];

  return (
    <div style={{ background: "linear-gradient(to bottom, #e0f7fa, #fce4ec)", minHeight: "100vh", padding: "3rem 0" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-5" style={{ color: "#00796B" }}>🌿 Helpful Resources</h1>
          <p className="lead text-muted">
            Find reliable tools and support systems to help you on your mental wellness journey.
          </p>
        </div>

        <div className="row">
          {resources.map((res, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 shadow border-0" style={{ backgroundColor: "#ffffff" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#C2185B" }}>{res.title}</h5>
                  <p className="card-text">{res.description}</p>
                  <a href={res.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    Visit Resource
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

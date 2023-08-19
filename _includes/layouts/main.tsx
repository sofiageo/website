export default ({children, author, title = ""}) => {

  const navlinks = [
    {url: "/", title: "home"},
    {url: "/projects", title: "projects"},
    {url: "/programming", title: "programming"},
    {url: "/hobbies", title: "hobbies"}
  ];
  return (
      <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/website.css"/>
      </head>
      <body>
      <div class="container">

        <div class="row header-bar">
          <div class="col-4">
          {/*  TODO ADD something */}
          </div>
          <div class="col-8">
            <nav className="navbar">
              <ul className="navbar-links">
                {/*<li><a href="/" className="navbar-home"><strong>Home</strong></a></li>*/}
                {
                  navlinks.map((link) => {
                    return <li><a href={link.url}>{link.title}</a></li>
                  })}</ul>
            </nav>
          </div>
        </div>
        {children}
      </div>
      </body>
      </html>
  )
}
export default ({children, title = ""}) => (
    <html>
    <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/website.css"/>
    </head>
    <body>
        {children}
    </body>
    </html>
);
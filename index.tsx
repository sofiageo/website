export const title = "TODO";
export const text = "Welcome to website";
export const layout = "layouts/main.tsx";

export default ({author, data}) => {
  return (
      <section id="index">
        <div>
          <img src="/static/images/gso-face.jpg" alt="author picture" width="100px"/>
          <h1>{author.name}</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2"><i
            className="fa-regular fa-location-dot"></i><h3>Athens, Greece</h3></div>
        <i className="fa-regular fa-cake-candles"></i><p>Full Stack Software Engineer</p>
        <div className="d-flex flex-row gap-3">
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-stack-overflow"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </section>
  );
};